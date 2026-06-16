import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import CategoryTransformer from '#transformers/category_transformer'
import session from '#config/session'

export default class CategoriesController {
  async index({ inertia }: HttpContext) {
    const categories = await Category.all()

    return inertia.render('admin/index', {
      categories: CategoryTransformer.transform(categories).useVariant('minify'),
    })
  }

  async destroy({ params, response, session }: HttpContext) {
    const category = await Category.findOrFail(params.id)

    await category.delete()
    session.flash('success', 'Catégorie supprimé avec succès')
    return response.redirect().toRoute('admin.index')
  }

  async store({ request, response, session }: HttpContext) {
    const data = request.only(['name'])

    await Category.create(data)
    session.flash('success', 'Catégorie créé avec succès')

    return response.redirect().toRoute('admin.index')
  }

  async update({ params, request, response, session }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    const data = request.only(['name'])

    await category.merge(data).save()
    session.flash('success', 'Catégorie mis à jour avec succès')

    return response.redirect().toRoute('admin.index')
  }
}
