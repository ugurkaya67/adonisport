import Brand from '#models/brand'
import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  async index({ inertia }: HttpContext) {
    const brands = await Brand.all()
    const categories = await Category.all()
    const products = await Brand.all()
    return inertia.render('admin/index', {
      brands,
      categories,
      products,
    })
  }
}
