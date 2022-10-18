import Users from 'App/Models/Users'

// Create a new user on database, public method
export async function createUser(userData: any): Promise<Users> {
  // create user in database
  const user = await Users.create(userData)
  // return user
  return user
}
