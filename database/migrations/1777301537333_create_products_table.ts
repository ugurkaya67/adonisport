import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
        table.increments('id')

        table
          .integer('category_id')
          .unsigned()
          .references('id')
          .inTable('categories')
          .onDelete('CASCADE')

        table
          .integer('brand_id')
          .unsigned()
          .references('id')
          .inTable('brands')
          .onDelete('SET NULL')
          .nullable()

        table.string('name').notNullable()
        table.string('slug').unique().notNullable()
        table.text('description').nullable()

        table.decimal('base_price', 10, 2).notNullable()

        table.string('image').nullable()

        table.boolean('is_active').defaultTo(true)
        table.boolean('is_featured').defaultTo(false)

        table.timestamp('created_at')
        table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}