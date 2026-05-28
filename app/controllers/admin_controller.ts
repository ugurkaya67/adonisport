import Brand from '#models/brand'
import Category from '#models/category'
import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  async index({ inertia }: HttpContext) {
    const products = await Product.query().preload('brand').preload('category')

    const brands = await Brand.all()
    const categories = await Category.all()

    return inertia.render('admin/index', {
      products,
      brands,
      categories,
    })
  }
}
