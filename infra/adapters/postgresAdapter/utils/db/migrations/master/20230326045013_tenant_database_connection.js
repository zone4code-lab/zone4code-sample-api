/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  try {
    await knex.schema.createTable('tenant_database_connection', (table) => {
      table.increments();
      table.string('name');
      table.string('dbhost');
      table.string('dbport');
      table.string('dbusername');
      table.string('dbname');
      table.string('dbpassword');
      table.timestamps(true, true, false);
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
  return knex.schema.dropTable('tenant_database_connection');
};
