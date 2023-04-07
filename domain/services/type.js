import * as typeRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getTypes
 */

export const getTypes = async (knex) => {
  const response = await typeRepository.getTypes(knex);
  return response;
};
/**
 * @function getTypeById
 */
export const getTypeById = async ({ id }, knex) => {
  const response = await typeRepository.getTypeById({ id }, knex);

  return response;
};
/**
 * @function addType
 */
export const addType = async (body, knex) => {
  const response = await typeRepository.addType(body, knex);

  return response;
};
/**
 * @function updateType
 */
export const updateType = async ({ id }, body, knex) => {
  const response = await typeRepository.updateType({ id }, body, knex);

  return response;
};
/**
 * @function deleteType
 */
export const deleteType = async ({ id }, knex) => {
  const response = await typeRepository.deleteType({ id }, knex);

  return response;
};

export default { getTypes, getTypeById, addType, updateType, deleteType };
