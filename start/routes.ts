/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Route group for users with jwt authentication
Route.group(() => {
  // Router GET /users api route
  Route.get('/:id?', 'UsersController.index')

  // Router POST /users api route
  Route.post('/', 'UsersController.store')

  // Router PUT /users/:id api route
  Route.put('/:id', 'UsersController.update')
})
  .prefix('users')
  .middleware('auth:jwt')

// Route for registering users
Route.post('/register', 'AuthController.register')

// Route for logging in users
Route.post('/login', 'AuthController.login').middleware('userExists')
