import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Brand from '#models/brand'

export default class extends BaseSeeder {
  async run() {
    await Brand.createMany([
      { name: 'Nike', slug: 'nike' },
      { name: 'Adidas', slug: 'adidas' },
      { name: 'Puma', slug: 'puma' },
      { name: 'Asics', slug: 'asics' },
      { name: 'Scott', slug: 'scott' },
    ])
  }
}