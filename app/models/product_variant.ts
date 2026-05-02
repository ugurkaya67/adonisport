import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Product from '#models/product'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProductVariant extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productId: number

  @column()
  declare sku: string

  @column()
  declare size: string | null

  @column()
  declare color: string | null

  @column()
  declare price: number

  @column()
  declare stock: number

  @column()
  declare image: string | null

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>
}
