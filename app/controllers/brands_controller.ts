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

  async update({ params, request, response, session }: HttpContext) {
    const brand = await Brand.findOrFail(params.id)
    const data = request.only(['name', 'logoUrl'])

    await brand.merge(data).save()
    session.flash('success', 'Marque mise à jour avec succès')

    return response.redirect().toRoute('admin.index')
  }

  async store({ request, response, session }: HttpContext) {
    const data = request.only(['name', 'logoUrl'])

    await Brand.create(data)
    session.flash('success', 'Marque créée avec succès')
    return response.redirect().toRoute('admin.index')
  }
}
