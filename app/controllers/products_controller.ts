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

    await Product.create(data)

    return response.redirect().toRoute('products.index')
  }

  async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'price', 'stock', 'image_url', 'brand_id', 'category_id'])

    await product.merge(data).save()

    return response.redirect().toRoute('admin.index')
  }

  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return response.redirect().toRoute('admin.index')
  }
}
