import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        name: 'Football',
        slug: 'football',
        description: 'Produits pour le football',
      },
      {
        name: 'Running',
        slug: 'running',
        description: 'Produits pour la course à pied',
      },
      {
        name: 'Fitness',
        slug: 'fitness',
        description: 'Produits pour le fitness',
      },
      {
        name: 'Basketball',
        slug: 'basketball',
        description: 'Produits pour le basketball',
      },
      {
        name: 'Padel',
        slug: 'padel',
        description: 'Produits pour le padel',
      },
      {
        name: 'Vélo',
        slug: 'vélo',
        description: 'Produits pour le vélo',
      },
    ])
  }
}