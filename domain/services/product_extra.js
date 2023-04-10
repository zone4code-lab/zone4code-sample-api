import * as product_extraRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getProduct_extras
 */

export const getProduct_extras = async (knex) => {
  const response = await product_extraRepository.getProduct_extras(knex);
  return response;
};
/**
 * @function getProduct_extraById
 */
export const getProduct_extraById = async ({ id }, knex) => {
  const response = await product_extraRepository.getProduct_extraById({ id }, knex);

  return response;
};
/**
 * @function addProduct_extra
 */
export const addProduct_extra = async (body, knex) => {
  const response = await product_extraRepository.addProduct_extra(body, knex);

  return response;
};
/**
 * @function updateProduct_extra
 */
export const updateProduct_extra = async ({ id }, body, knex) => {
  const response = await product_extraRepository.updateProduct_extra({ id }, body, knex);

  return response;
};
/**
 * @function deleteProduct_extra
 */
export const deleteProduct_extra = async ({ id }, knex) => {
  const response = await product_extraRepository.deleteProduct_extra({ id }, knex);

  return response;
};

export default { getProduct_extras, getProduct_extraById, addProduct_extra, updateProduct_extra, deleteProduct_extra };
