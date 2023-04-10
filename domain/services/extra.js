import * as extraRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getExtras
 */

export const getExtras = async (knex) => {
  const response = await extraRepository.getExtras(knex);
  return response;
};
/**
 * @function getExtraById
 */
export const getExtraById = async ({ id }, knex) => {
  const response = await extraRepository.getExtraById({ id }, knex);

  return response;
};
/**
 * @function addExtra
 */
export const addExtra = async (body, knex) => {
  const response = await extraRepository.addExtra(body, knex);

  return response;
};
/**
 * @function updateExtra
 */
export const updateExtra = async ({ id }, body, knex) => {
  const response = await extraRepository.updateExtra({ id }, body, knex);

  return response;
};
/**
 * @function deleteExtra
 */
export const deleteExtra = async ({ id }, knex) => {
  const response = await extraRepository.deleteExtra({ id }, knex);

  return response;
};

export default { getExtras, getExtraById, addExtra, updateExtra, deleteExtra };
