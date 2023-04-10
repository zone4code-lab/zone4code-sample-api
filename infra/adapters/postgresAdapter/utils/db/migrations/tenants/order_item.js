/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const up = async (knex) => {
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  try {
    await knex.schema.createTable('order_item', (table) => {
      table.increments('id').primary();
      table.integer('order_id').unsigned().references('id').inTable('orders');
      table.integer('type_id').unsigned().references('id').inTable('types');
      table.decimal('price', 10, 2);
      table.integer('quantity');
      table.integer('color_id');
      table.integer('size_id');
      table.json('extras_id');
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
  return knex.schema.dropTable('order_item');
};

