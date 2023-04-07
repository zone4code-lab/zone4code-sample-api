import * as product_sizeRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getProduct_sizes
 */

export const getProduct_sizes = async (knex) => {
  const response = await product_sizeRepository.getProduct_sizes(knex);
  return response;
};
/**
 * @function getProduct_sizeById
 */
export const getProduct_sizeById = async ({ id }, knex) => {
  const response = await product_sizeRepository.getProduct_sizeById({ id }, knex);

  return response;
};
/**
 * @function addProduct_size
 */
export const addProduct_size = async (body, knex) => {
  const response = await product_sizeRepository.addProduct_size(body, knex);

  return response;
};
/**
 * @function updateProduct_size
 */
export const updateProduct_size = async ({ id }, body, knex) => {
  const response = await product_sizeRepository.updateProduct_size({ id }, body, knex);

  return response;
};
/**
 * @function deleteProduct_size
 */
export const deleteProduct_size = async ({ id }, knex) => {
  const response = await product_sizeRepository.deleteProduct_size({ id }, knex);

  return response;
};

export default { getProduct_sizes, getProduct_sizeById, addProduct_size, updateProduct_size, deleteProduct_size };
