import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import ProductTransformer from '#transformers/product_transformer'

export default class ProductsController {
  async index({ inertia }: HttpContext) {
    const products = await Product.all()

    return inertia.render('auth/product', {
      products: ProductTransformer.transform(products),
    })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'price', 'stock', 'image_url', 'brand_id', 'category_id'])
    console.log(data)
    await Product.create(data)

    return response.redirect().toRoute('products.index')
  }
}
