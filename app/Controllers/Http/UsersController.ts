import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { Client } from '@hubspot/api-client'

export default class UsersController {
  // Router GET /users api route
  public async index({ response, params }: HttpContextContract) {
    // initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    const page = await hubspotClient.crm.contacts.basicApi.getPage()
    // if params.id is not null, return user with id else return all users
    if (params.id) {
      // return user with id
      const user = page.results.find((user) => user.id === params.id)

      if (user) {
        return response.ok({
          message: 'User found',
          user,
        })
      } else {
        return response.notFound({
          message: 'User not found',
        })
      }
    } else {
      // return all users
      return response.ok({
        message: 'All users',
        users: page.results,
      })
    }
  }

  // Router POST /users api route
  public async store({ request, response }: HttpContextContract) {
    // initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    // get user data from request body
    const userData = { properties: request.body() }

    // create user in hubspot
    const user = await hubspotClient.crm.contacts.basicApi.create(userData)

    // return user
    return response.created({
      message: 'User created',
      user,
    })
  }

  // Router PUT /users/:id api route
  public async update({ request, response, params }: HttpContextContract) {
    // initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    // get user data from request body
    const userData = { properties: request.body() }

    // update user in hubspot
    const user = await hubspotClient.crm.contacts.basicApi.update(params.id, userData)

    // return user
    return response.ok({
      message: 'User updated',
      user,
    })
  }

  // NOTE: this is not possible with hubspot api
  // Router DELETE /users/:id api route
  /*public async destroy({ response, params }: HttpContextContract) {
    // initialize hubspot client
    const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

    // delete user in hubspot
    const user = await hubspotClient.crm.contacts.basicApi.delete(params.id)

    // return user
    return response.ok({
      message: 'User deleted',
      user,
    })
  }*/
}
