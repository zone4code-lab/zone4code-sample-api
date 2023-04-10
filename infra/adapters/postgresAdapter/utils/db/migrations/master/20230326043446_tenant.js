/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('tenant', (table) => {
      table.increments();
      table.integer('isupdating');
    });
  } catch (err) {
    console.log('err :>> ', err);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tenant');
};
