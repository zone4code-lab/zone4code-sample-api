/* import * as Models from '../models'; */
import Person from '../schema/person';
/**
 * @function getPersons
 */
export const getPersons = async (knex) => {
  try {
    const data = await Person.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getPersonById
 */
export const getPersonById = async ({ id }, knex) => {
  try {
    const data = await Person.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addPerson
 */
export const addPerson = async (body, knex) => {
  try {
    const data = await Person.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updatePerson
 */
export const updatePerson = async ({ id }, body, knex) => {
  try {
    const data = await Person.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deletePerson
 */
export const deletePerson = async ({ id }, knex) => {
  try {
    await Person.query(knex).deleteById(id);
    return { result: { status: '200', message: `Person with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getPersons, getPersonById, addPerson, updatePerson, deletePerson };
