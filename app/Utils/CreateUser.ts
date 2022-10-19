import User from 'App/Models/User'

// Create a new user on database, public method
export async function createUser(userData: any): Promise<User> {
  // create user in database
  const user = await User.create(userData)
  // return user
  return user
}
