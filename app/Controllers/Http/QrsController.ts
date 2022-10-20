import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import QrData from 'App/Models/QrData'
import { v5 as uuidv5 } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'

export default class QrsController {
  //Default route QR
  public async index({ response, params }: HttpContextContract) {
    //return qr with id
    const qr = await QrData.findByOrFail('idQR', params.id)

    //Update state qr
    qr.stateQR = true
    // qr.urlQR = 'https://www.youtube.com/watch?v=QH2-TGUlwu4'

    //Save qr data
    await qr.save()

    if (qr) {
      //Redirect to origin url qr
      return response.redirect(qr.urlQR)
    } else {
      //Not found qr
      return response.notFound({
        message: 'QR not found',
      })
    }
  }

  //Create QR
  public async store({ request, response }: HttpContextContract) {
    //Validator required json array
    const validatoprScheme = schema.create({
      qrInformation: schema.array().members(
        schema.object().members({
          idQR: schema.number(),
          urlQR: schema.string(),
        })
      ),
    })

    //Validate request
    await request.validate({ schema: validatoprScheme })

    //Get post request data
    const { qrInformation } = request.body()

    //Map qr information and add api url and state qr
    const qrInformationWithApiUrl = qrInformation.map((qr) => {
      return {
        urlQR: qr.urlQR,

        //Generate uuid v5 whit id
        idQR: uuidv5(qr.idQR.toString(), Env.get('QR_KEY')),
        apiUrl: `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=/http://127.0.0.1:3333/${qr.idQR}&choe=UTF-8`,
        stateQR: false,
      }
    }, [])

    //Save qr information in database and save in variable
    const qrData = await QrData.createMany(qrInformationWithApiUrl)

    //Return save data
    return response.ok({
      message: 'QR data saved',
      qrData,
    })
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
