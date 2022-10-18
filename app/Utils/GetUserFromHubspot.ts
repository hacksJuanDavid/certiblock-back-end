import { Client } from '@hubspot/api-client'
import { SimplePublicObjectWithAssociations } from '@hubspot/api-client/lib/codegen/crm/companies'
import Env from '@ioc:Adonis/Core/Env'

// Check if user exists in hubspot api
export async function getUserFromHubspot(
  email: string
): Promise<SimplePublicObjectWithAssociations | undefined> {
  // Initialize hubspot client
  const hubspotClient = new Client({ accessToken: Env.get('HUBSPOT_API_KEY') })

  const page = await hubspotClient.crm.contacts.basicApi.getPage()

  const user = page.results.find((user) => user.properties.email === email)

  return user
}
