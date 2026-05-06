import type Product from '#models/product'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class ProductTransformer extends BaseTransformer<Product> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'name',
      'price',
      'stock',
      'imageUrl',
      'createdAt',
      'updatedAt',
    ])
  }
}
