import * as sizeRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getSizes
 */

export const getSizes = async (knex) => {
  const response = await sizeRepository.getSizes(knex);
  return response;
};
/**
 * @function getSizeById
 */
export const getSizeById = async ({ id }, knex) => {
  const response = await sizeRepository.getSizeById({ id }, knex);

  return response;
};
/**
 * @function addSize
 */
export const addSize = async (body, knex) => {
  const response = await sizeRepository.addSize(body, knex);

  return response;
};
/**
 * @function updateSize
 */
export const updateSize = async ({ id }, body, knex) => {
  const response = await sizeRepository.updateSize({ id }, body, knex);

  return response;
};
/**
 * @function deleteSize
 */
export const deleteSize = async ({ id }, knex) => {
  const response = await sizeRepository.deleteSize({ id }, knex);

  return response;
};

export default { getSizes, getSizeById, addSize, updateSize, deleteSize };
