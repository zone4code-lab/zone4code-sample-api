import * as priceRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getPrices
 */

export const getPrices = async (knex) => {
  const response = await priceRepository.getPrices(knex);
  return response;
};
/**
 * @function getPriceById
 */
export const getPriceById = async ({ id }, knex) => {
  const response = await priceRepository.getPriceById({ id }, knex);

  return response;
};
/**
 * @function addPrice
 */
export const addPrice = async (body, knex) => {
  const response = await priceRepository.addPrice(body, knex);

  return response;
};
/**
 * @function updatePrice
 */
export const updatePrice = async ({ id }, body, knex) => {
  const response = await priceRepository.updatePrice({ id }, body, knex);

  return response;
};
/**
 * @function deletePrice
 */
export const deletePrice = async ({ id }, knex) => {
  const response = await priceRepository.deletePrice({ id }, knex);

  return response;
};

export default { getPrices, getPriceById, addPrice, updatePrice, deletePrice };
