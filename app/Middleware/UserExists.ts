import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getUserFromHubspot } from 'App/Utils/GetUserFromHubspot'

export default class UserExists {
  public async handle({ response, request }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    // Check if user exists in hubspot api
    // If user exists, continue
    // If user does not exist, return error
    const user = await getUserFromHubspot(request.body().email)

    if (user) {
      await next()
    } else {
      // return 401 unauthorized
      return response.unauthorized({
        message: 'User does not exist',
      })
    }
  }
}
