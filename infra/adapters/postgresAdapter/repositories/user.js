import User from '../schema/user';

export const addUser = async (body, knex) => {
  try {
    const data = await User.query(knex).insertGraph(body);

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
export const listUsers = async (knex) => {
  try {
    const data = await User.query(knex).throwIfNotFound();

    console.log('POOOOOOOL ===========>', knex.client);
    // await knex.destroy();

    return { result: { status: '500', data: data } };
  } catch (err) {
    return { error: err };
  }
};
