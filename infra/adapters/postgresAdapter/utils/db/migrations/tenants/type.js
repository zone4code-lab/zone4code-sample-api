/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('types', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.string('image');
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products');
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
  return knex.schema.dropTable('types');
};

