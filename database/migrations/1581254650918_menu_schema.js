'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenuSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.string('name', 300)
      table.string('price')
      table.string('discount')
      table.string('cover_image')
      table
        .integer('branch_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('branches')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .boolean('available')
        .notNullable()
        .default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenuSchema
