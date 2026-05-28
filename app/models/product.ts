import { ProductSchema } from '#database/schema'
import Brand from '#models/brand'
import Category from '#models/category'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Product extends ProductSchema {
  @belongsTo(() => Brand)
  declare brand: BelongsTo<typeof Brand>

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>
}
