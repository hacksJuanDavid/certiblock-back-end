import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { Client } from '@hubspot/api-client'

export default class UserMustExist {
  public async handle({ params, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    // Check if user exists in hubspot api
    // If user exists, continue
    // If user does not exist, return error
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    const page = await hubspotClient.crm.contacts.basicApi.getPage()

    const userExists = page.results.find((user) => user.properties.email === params.email)

    if (userExists) {
      await next()
    } else {
      // return 401 unauthorized
      return response.unauthorized({
        message: 'User does not exist',
      })
    }
  }
}
