import * as colorRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getColors
 */

export const getColors = async (knex) => {
  const response = await colorRepository.getColors(knex);
  return response;
};
/**
 * @function getColorById
 */
export const getColorById = async ({ id }, knex) => {
  const response = await colorRepository.getColorById({ id }, knex);

  return response;
};
/**
 * @function addColor
 */
export const addColor = async (body, knex) => {
  const response = await colorRepository.addColor(body, knex);

  return response;
};
/**
 * @function updateColor
 */
export const updateColor = async ({ id }, body, knex) => {
  const response = await colorRepository.updateColor({ id }, body, knex);

  return response;
};
/**
 * @function deleteColor
 */
export const deleteColor = async ({ id }, knex) => {
  const response = await colorRepository.deleteColor({ id }, knex);

  return response;
};

export default { getColors, getColorById, addColor, updateColor, deleteColor };
