import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'

export default class CategoriesController {
  async index({ inertia }: HttpContext) {
    const categories = await Category.all()

    return inertia.render('admin/index', {
      categories,
    })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name'])

    await Category.create(data)

    return response.redirect().toRoute('admin.index')
  }
}
