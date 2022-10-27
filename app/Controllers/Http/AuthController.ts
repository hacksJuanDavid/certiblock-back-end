import { Client } from '@hubspot/api-client'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { createUser } from 'App/Utils/CreateUser'
import { getUserFromHubspot } from 'App/Utils/GetUserFromHubspot'
import { schema } from "@ioc:Adonis/Core/Validator"

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    // Validate request body
    const postSchema = schema.create({
      firstName: schema.string(),
      lastName: schema.string(),
      email: schema.string(),
      password: schema.string(),
    })

    // get validated data from request body
    await request.validate({ schema: postSchema })

    // Initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    // get user data from request body
    // structure of user data (firstname, lastname, email)
    const userData = {
      properties: {
        firstname: request.body().firstName,
        lastname: request.body().lastName,
        email: request.body().email
      }
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
