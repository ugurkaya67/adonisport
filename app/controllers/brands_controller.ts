import type { HttpContext } from '@adonisjs/core/http'
import Brand from '#models/brand'
import BrandTransformer from '#transformers/brand_transformer'

export default class BrandsController {
  async index({ inertia }: HttpContext) {
    const brands = await Brand.all()

    return inertia.render('admin/index', {
      brands: BrandTransformer.transform(brands).useVariant('minify'),
    })
  }

  async destroy({ params, response, session }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    await brand.delete()
    session.flash('success', 'Marque supprimée avec succès')

    return response.redirect().toRoute('admin.index')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'logoUrl'])

    await Brand.create(data)

    return response.redirect().toRoute('admin.index')
  }
}
