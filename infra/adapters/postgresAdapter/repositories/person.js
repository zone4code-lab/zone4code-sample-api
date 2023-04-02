import Person from '../schema/person';

export const addPerson = async (body, knex) => {
  try {
    const data = await Person.query(knex).insertGraph(body);

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
export const listPersons = async (knex) => {
  try {
    const data = await Person.query(knex).throwIfNotFound();

    console.log('POOOOOOOL ===========>', knex.client);
    // await knex.destroy();

    return { result: { status: '500', data: data } };
  } catch (err) {
    return { error: err };
  }
};
