import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'
import ProductVariant from '#models/product_variant'
import Category from '#models/category'
import Brand from '#models/brand'

export default class extends BaseSeeder {
  async run() {
    const running = await Category.findByOrFail('slug', 'running')
    const football = await Category.findByOrFail('slug', 'football')
    const velo = await Category.findByOrFail('slug', 'vélo')

    const nike = await Brand.findByOrFail('slug', 'nike')
    const adidas = await Brand.findByOrFail('slug', 'adidas')
    const scott = await Brand.findByOrFail('slug', 'scott')

    // Produit 1
    const product1 = await Product.create({
      name: 'Nike Air Zoom Pegasus',
      slug: 'nike-air-zoom-pegasus',
      description: 'Chaussure de running confortable',
      basePrice: 120,
      categoryId: running.id,
      brandId: nike.id,
    })

    await ProductVariant.createMany([
      {
        productId: product1.id,
        sku: 'PEG-42-BLK',
        size: '42',
        color: 'Noir',
        price: 120,
        stock: 10,
      },
      {
        productId: product1.id,
        sku: 'PEG-43-BLU',
        size: '43',
        color: 'Bleu',
        price: 120,
        stock: 5,
      },
    ])

    // Produit 2
    const product2 = await Product.create({
      name: 'Adidas Predator Elite',
      slug: 'adidas-predator-elite',
      description: 'Chaussures de football haute performance',
      basePrice: 150,
      categoryId: football.id,
      brandId: adidas.id,
    })

    await ProductVariant.createMany([
      {
        productId: product2.id,
        sku: 'PRED-42-RED',
        size: '42',
        color: 'Rouge',
        price: 150,
        stock: 8,
      },
      {
        productId: product2.id,
        sku: 'PRED-43-BLK',
        size: '43',
        color: 'Noir',
        price: 150,
        stock: 6,
      },
    ])

    const product3 = await Product.create({
      name: 'Scott Roadster',
      slug: 'scott-roadster',
      description: 'Vélo de route léger et performant',
      basePrice: 800,
      categoryId: velo.id,
      brandId: scott.id,
    })

    await ProductVariant.createMany([
      {
        productId: product3.id,
        sku: 'SCOTT-ROADSTER-2023',
        size: 'M',
        color: 'Bleu',
        price: 800,
        stock: 3,
      },
    ])
  }
}






