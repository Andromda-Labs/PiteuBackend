'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchSchema extends Schema {
  up () {
    this.create('branches', (table) => {
      table.increments()
      table
        .integer('space_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('spaces')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('address_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('work_time_week')
      table.string('work_time_weekend')
      table.timestamps()
    })
  }

  down () {
    this.drop('branches')
  }
}

module.exports = BranchSchema
