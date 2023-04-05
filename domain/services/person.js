import * as personRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getPersons
 */

export const getPersons = async (knex) => {
  const response = await personRepository.getPersons(knex);
  return response;
};
/**
 * @function getPersonById
 */
export const getPersonById = async ({ id }, knex) => {
  const response = await personRepository.getPersonById({ id }, knex);
  return response;
};
/**
 * @function addPerson
 */
export const addPerson = async (data, knex) => {
  const response = await personRepository.addPerson(data, knex);
  return response;
};
/**
 * @function updatePerson
 */
export const updatePerson = async ({ id }, body, knex) => {
  const response = await personRepository.updatePerson({ id }, body, knex);
  return response;
};
/**
 * @function deletePerson
 */
export const deletePerson = async ({ id }, knex) => {
  const response = await personRepository.deletePerson({ id }, knex);
  return response;
};

export default { getPersons, getPersonById, addPerson, updatePerson, deletePerson };
