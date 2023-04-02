import * as personRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getPersons
 */

export const getPersons = async ({ clientId }) => {
  const response = await personRepository.getPersons({ clientId });

  return response;
};
/**
 * @function getPersonById
 */
export const getPersonById = async ({ id, clientId }) => {
  const response = await personRepository.getPersonById({ id, clientId });

  return response;
};
/**
 * @function addPerson
 */
export const addPerson = async ({ name, description, clientId }) => {
  const response = await personRepository.addPerson({ name, description, clientId });

  return response;
};
/**
 * @function updatePerson
 */
export const updatePerson = async ({ id, body, clientId }) => {
  const response = await personRepository.updatePerson({ id, body, clientId });

  return response;
};
/**
 * @function deletePerson
 */
export const deletePerson = async ({ id, clientId }) => {
  const response = await personRepository.deletePerson({ id, clientId });

  return response;
};

export default { getPersons, getPersonById, addPerson, updatePerson, deletePerson };
