import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Category from '#models/category'
import Brand from '#models/brand'
import ProductVariant from '#models/product_variant'

import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare basePrice: number

  @column()
  declare categoryId: number

  @column()
  declare brandId: number | null

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @belongsTo(() => Brand)
  declare brand: BelongsTo<typeof Brand>

  @hasMany(() => ProductVariant)
  declare variants: HasMany<typeof ProductVariant>
}