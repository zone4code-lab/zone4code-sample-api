/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    try {
    await knex.schema.alterTable('person', (table) => {
    table.string('description');
    });
    } catch (err) {
    console.log('err :>> ', err);
    }
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    try {
     await knex.schema.alterTable('person', (table) => {
      table.dropColumn('description');
    });
} catch (err) {
      console.log('err :>> ', err);
}
};
