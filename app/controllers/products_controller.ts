import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ inertia }: HttpContext) {
    const products = await Product.all()

    return inertia.render('products/index', {
      products,
    })
  }
}