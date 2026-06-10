import type { HttpContext } from '@adonisjs/core/http'
import Brand from '#models/brand'

export default class BrandsController {
  async index({ inertia }: HttpContext) {
    const brands = await Brand.all()

    return inertia.render('admin/index', {
      brands,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    await brand.delete()

    return response.redirect().toRoute('admin.index')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'logoUrl'])

    await Brand.create(data)

    return response.redirect().toRoute('admin.index')
  }
}
