/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import ProductsController from '#controllers/products_controller'

router.on('/').renderInertia('home', {}).as('home')

router.get('/products', [ProductsController, 'index'])

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create']).as('signup')
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create']).as('login')
    router.post('login', [controllers.Session, 'store'])

    router.get('test', ({response})=>response.redirect().toRoute('home')).as('test')   })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy']).as('logout')
  })
  .use(middleware.auth())