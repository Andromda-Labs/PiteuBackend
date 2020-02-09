"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SpaceSchema extends Schema {
  up() {
    this.create("spaces", table => {
      table.increments()
      table.string("name")
      table
        .integer('likes')
        .unsigned()
      table
        .integer('recomendations')
        .unsigned()
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    });
  }

  down() {
    this.drop("spaces");
  }
}

module.exports = SpaceSchema;
