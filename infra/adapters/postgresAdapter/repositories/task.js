import Task from '../schema/task';

export const addTask = async (body, knex) => {
  try {
    const data = await Task.query(knex).insertGraph(body);

    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};

/**
 *
 * @param {import ("knex").Knex} knex
 * @returns
 */
export const listTasks = async (knex) => {
  try {
    const data = await Task.query(knex).throwIfNotFound();

    console.log('POOOOOOOL ===========>', knex.client);
    // await knex.destroy();

    return { result: { status: '500', data: data } };
  } catch (err) {
    return { error: err };
  }
};
