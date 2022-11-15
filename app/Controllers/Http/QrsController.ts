import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v5 as uuidv5 } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'
import { Client } from '@hubspot/api-client'
import { schema } from '@ioc:Adonis/Core/Validator'
import { setInactiveFLACertiBlock } from 'App/Utils/SmartContractsHelper'

// Initialize hubspot client
const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

// Check if qrs object exists in hubspot

export default class QrsController {
  // Router GET /qrs api route
  public async index({ response, params }: HttpContextContract) {
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
          'qrimage',
          'views',
          'externalid',
          'externalurl',
          'externalreadedurl',
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
              updatedat: new Date().toISOString(),
              readedat: new Date().toISOString(),
            },
          })

          // update FLA smart contract to false
          await setInactiveFLACertiBlock(parseInt(qr.externalid))

          // redirect to external url
          return response.redirect(qr.externalurl, false)
        } else {
          // redirect to external readed url
          return response.redirect(qr.externalreadedurl, false)
        }
      }
    }

    // return 404 error
    return response.notFound({
      message: 'QR not found',
    })
  }

  // Router POST /qrs api route
  public async store({ request, response }: HttpContextContract) {
    // Validate request body
    const postSchema = schema.create({
      id: schema.number(),
      url: schema.string(),
      readedUrl: schema.string(),
    })

    // get validated data from request body
    await request.validate({ schema: postSchema })

    // get qr data from request body
    // structure of qr data
    const qrData = request.body()

    const url = `${Env.get('APP_URL')}/qrs/${uuidv5(qrData.id.toString(), Env.get('QR_KEY'))}`
    // create qr in hubspot custom object
    const qr = await hubspotClient.crm.objects.basicApi.create('qrdatas', {
      properties: {
        createdat: new Date().toISOString(),
        updatedat: new Date().toISOString(),
        uuid: uuidv5(qrData.id.toString(), Env.get('QR_KEY')),
        url: url,
        readed: 'false',
        externalid: qrData.id.toString(),
        externalurl: qrData.url,
        externalreadedurl: qrData.readedUrl,
        // QR url from google api
        qrimage: 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + url + '&choe=UTF-8',
      },
    })

    // return qr image with status 201
    return response.created({
      message: 'QR created',
      qr: qr.properties.qrimage,
      id: qr.properties.uuid,
    })
  }

  // test uuid route
  public async test({ response }: HttpContextContract) {
    return response.created({
      uuid: uuidv5(1, Env.get('QR_KEY')),
    })
  }
}
