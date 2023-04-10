/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('orders', (table) => {
      table.increments('id').primary();
      table.string('name').nullable();
      table.string('customer_id');
      table.string('tax').nullable();
      table.string('shipping').nullable();
      table.string('status').defaultTo('draft');
      table.decimal('total', 10, 2).notNullable();
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
  return knex.schema.dropTable('orders');
};

