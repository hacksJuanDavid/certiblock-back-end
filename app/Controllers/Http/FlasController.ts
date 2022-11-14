import { Client } from '@hubspot/api-client'
import Env from '@ioc:Adonis/Core/Env'
import { v5 } from 'uuid'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {
  getTokenURI,
  getTotalSupplyFLACertiBlock,
  mintFLACertiBlock,
  setActiveBaseURI,
  setInactiveBaseURI,
  setInactiveFLACertiBlock,
} from 'App/Utils/SmartContractsHelper'
import { Metadata } from 'App/Utils/UploadIPFS'
import { DateTime } from 'luxon'
import { uploadS3 } from 'App/Utils/UploadAmazon'
import { fetchJson } from 'ethers/lib/utils'

// initialize hubspot client
const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

export default class FlasController {
  // index get first 100 QrData from hubspot
  public async index({ response }: HttpContextContract) {
    const page = await hubspotClient.crm.objects.basicApi.getPage('qrdatas', 100, undefined, [
      'uuid',
      'url',
      'readed',
      'qrimage',
      'externalid',
      'externalurl',
    ])

    return response.json(page)
  }

  // store create new QRdatas in hubspot
  public async store({ request, response }: HttpContextContract) {
    // Validate request
    const data = await request.validate({
      schema: schema.create({
        amount: schema.number([rules.required()]),
        type: schema.number([rules.required(), rules.range(1, 2)]),
        lote: schema.string([rules.required()]),
        name: schema.string([rules.required()]),
        years: schema.number([rules.required()]),
        sugar: schema.string([rules.required()]),
        mililiters: schema.number([rules.required()]),
        reference: schema.string([rules.required()]),
      }),
    })

    // Get amount of FLA in smart contract
    const balance = await getTotalSupplyFLACertiBlock()

    // Create metadata array with the amount
    const metadata: Metadata[] = []

    for (let i = 0; i < data.amount; i++) {
      metadata.push({
        id: (i + balance.toNumber()).toString(),
        type: data.type,
        lote: data.lote,
        name: data.name,
        years: data.years,
        sugar: data.sugar,
        mililiters: data.mililiters,
        reference: data.reference,
        date: DateTime.now().toISO(),
      })
    }

    // first create directory in S3 amazon
    await uploadS3(metadata)

    // Create many custom objects in hubspot
    const qrDatas = await hubspotClient.crm.objects.batchApi.create('qrdatas', {
      inputs: metadata.map((metadata) => {
        return {
          properties: {
            uuid: v5(metadata.id.toString(), Env.get('QR_KEY')),
            url: `${Env.get('APP_URL')}/qrs/${v5(metadata.id.toString(), Env.get('QR_KEY'))}`,
            readed: 'false',
            qrimage: `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${Env.get(
              'APP_URL'
            )}/qrs/${v5(metadata.id.toString(), Env.get('QR_KEY'))}&choe=UTF-8`,
            externalid: metadata.id,
            externalurl: `https://certiblock.co/fla/${v5(
              metadata.id.toString(),
              Env.get('QR_KEY')
            )}`,
            externalreadedurl: `https:certiblock.co/fla/${v5(
              metadata.id.toString(),
              Env.get('QR_KEY')
            )}`,
            views: '0',
            type: metadata.type.toString(),
            createdat: new Date().toISOString(),
            updatedat: new Date().toISOString(),
          },
        }
      }),
    })

    // Now with the files and the qrDatas created, we can create the FLA in the smart contract
    await mintFLACertiBlock(data.amount)

    // return ipfs
    return response.json({
      message: 'QRs created',
      qrDatas,
    })
  }

  // Update FLA smart contract urls
  public async updateContractURL({ request, response }: HttpContextContract) {
    // Validate request
    const data = await request.validate({
      schema: schema.create({
        activeUrl: schema.string([rules.required()]),
        inactiveUrl: schema.string([rules.required()]),
      }),
    })

    // Update FLA smart contract urls
    if ((await setActiveBaseURI(data.activeUrl)) && (await setInactiveBaseURI(data.inactiveUrl))) {
      return response.json({ message: 'URLs updated' })
    } else {
      return response.badRequest({ message: 'Error updating URLs' })
    }
  }

  // Show get one QrData from hubspot
  public async show({ params, response }: HttpContextContract) {
    // if params.id is not null, get qr by uuid from hubspot else return error 404
    if (params.id) {
      // get info hubspot by uuid
      const page = await hubspotClient.crm.objects.searchApi.doSearch('qrdatas', {
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'uuid',
                operator: 'EQ',
                value: params.id,
              },
            ],
          },
        ],
        sorts: [],
        limit: 1,
        properties: [
          'uuid',
          'url',
          'readed',
          'views',
          'externalid',
          'externalurl',
          'externalreadedurl',
          'createdat',
          'readedat',
          'type'
        ],
        after: 0,
      })

      // if qr exists, return qr else return error 404
      if (page.results.length > 0) {
        const qr = page.results[0].properties
        // if qr isn't readed, return qr else return error 404
        if (qr.readed === 'false') {
          console.log(qr)
          // update qr in huspot, set readed to true and update updatedat property and readedat property
          await hubspotClient.crm.objects.basicApi.update('qrdatas', qr.hs_object_id, {
            properties: {
              readed: 'true',
              views: (parseInt(qr.views) + 1).toString(),
              updatedat: new Date().toISOString(),
              readedat: new Date().toISOString(),
            },
          })
          // update FLA smart contract to false
          await setInactiveFLACertiBlock(parseInt(qr.externalid))
        } else {
          // sum views
          await hubspotClient.crm.objects.basicApi.update('qrdatas', qr.hs_object_id, {
            properties: {
              views: (parseInt(qr.views) + 1).toString(),
              updatedat: new Date().toISOString(),
            },
          })
        }

        // get tokeURI from smart contract
        const tokenURI = await getTokenURI(parseInt(qr.externalid))

        // get metadata from json URI
        const metadata = await fetchJson(tokenURI)

        console.log(metadata)
        

        // return from metadata, image, name, description, lote, years, sugar, mililiters, reference, date
        // return from qr, vies, createdat, readedat, type
        return response.json({
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
          lote: metadata.lote,
          years: metadata.years,
          sugar: metadata.sugar,
          mililiters: metadata.mililiters,
          reference: metadata.reference,
          date: metadata.date,
          views: qr.views,
          createdat: qr.createdat,
          readedat: qr.readedat,
          type: qr.type,
        })
      }
    }

    // return 404 error
    return response.notFound({
      message: 'Data not found',
    })
  }
}
