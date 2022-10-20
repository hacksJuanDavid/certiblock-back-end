import { Client } from '@hubspot/api-client'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

// Create a new user on database, public method
export async function createUser(userData: any): Promise<User> {
  // create user in database
  const user = await User.create(userData)
  // return user
  return user
}

// Create a new user on hubspot, public method
export async function createUserOnHubspot(userData: any): Promise<any> {
  // initialize hubspot client
  const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

  // create user in hubspot
  const user = await hubspotClient.crm.contacts.basicApi.create(userData)

  // return user
  return user
}
