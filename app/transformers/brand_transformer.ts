import { BaseTransformer } from '@adonisjs/core/transformers'
import type Brand from '#models/brand'

export default class BrandTransformer extends BaseTransformer<Brand> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'logoUrl']),
    }
  }
  minify() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'logoUrl']),
    }
  }
}
