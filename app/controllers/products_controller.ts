import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  async create({ inertia }: HttpContext) {
    return inertia.render('products/index', {})
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'price', 'stock', 'image_url'])
    await Product.create(data)
    response.redirect().toRoute('products.index')
  }
}
