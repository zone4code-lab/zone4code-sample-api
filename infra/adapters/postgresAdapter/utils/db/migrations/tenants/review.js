/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('reviews', (table) => {
      table.increments('id').primary();
      table.integer('type_id').unsigned().references('id').inTable('types');
      table.string('customer_id');
      table.string('rating');
      table.string('comment');
      table.json('images');
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
  return knex.schema.dropTable('reviews');
};

