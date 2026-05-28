import { CategorySchema } from '#database/schema'
import Product from '#models/product'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends CategorySchema {
  @hasMany(() => Product)
  declare products: HasMany<typeof Product>
}
