/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('price', (table) => {
      table.increments('id').primary();
      table.integer('type_id').unsigned().notNullable().references('id').inTable('types');
      table.integer('size_id').unsigned().nullable().references('id').inTable('sizes');
      table.decimal('price', 10, 2).notNullable();
      table.timestamps(true, true);
    });
  } catch (err) {
    console.log('err :>> ', err);
  }
};

/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const down = (knex) => {
  return knex.schema.dropTable('price');
};

