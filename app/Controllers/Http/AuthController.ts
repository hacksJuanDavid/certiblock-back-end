import { Client } from '@hubspot/api-client'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { createUser } from 'App/Utils/CreateUser'
import { getUserFromHubspot } from 'App/Utils/GetUserFromHubspot'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    // Initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    getUserFromHubspot(request.body().email)

    // get user data from request body
    // structure of user data (firstname, lastname, email)
    const userData = {
      properties: (({ firstname, lastname, email }) => ({ firstname, lastname, email }))(
        request.body()
      ),
    }

    // check if user exists in hubspot if not create user
    let user = await getUserFromHubspot(userData.properties.email)

    if (!user) {
      user = await hubspotClient.crm.contacts.basicApi.create(userData)
    }
    // create user in database
    await createUser({
      email: user.properties.email,
      hubspot_id: parseInt(user.id),
      password: request.body().password,
    })

    // return user
    return response.created({
      message: 'User created',
      user,
    })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    // get user data from request body
    const { email, password } = request.body()

    // attempt to login
    const token = await auth.use('jwt').attempt(email, password)

    // return token
    return response.ok({
      message: 'User logged in',
      token,
    })
  }
}
