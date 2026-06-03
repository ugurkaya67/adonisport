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

router.on('/').renderInertia('home', {}).as('home')

router.get('products', [controllers.Products, 'index']).as('products.index')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create']).as('signup')
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create']).as('login')
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.get('admin', [controllers.Admin, 'index']).as('admin.index')

    router.get('categories', [controllers.Categories, 'index']).as('categories.index')
    router.post('categories', [controllers.Categories, 'store']).as('categories.store')

    router.get('brands', [controllers.Brands, 'index']).as('brands.index')
    router.post('brands', [controllers.Brands, 'store']).as('brands.store')

    router.post('products', [controllers.Products, 'store']).as('products.store')

    router.put('products/:id', [controllers.Products, 'update']).as('products.update')
    router.delete('products/:id', [controllers.Products, 'destroy']).as('products.destroy')
  })
  .use(middleware.auth())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy']).as('logout')
  })
  .use(middleware.auth())
