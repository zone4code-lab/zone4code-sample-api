import * as productRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getProducts
 */

export const getProducts = async (knex) => {
  const response = await productRepository.getProducts(knex);
  return response;
};
/**
 * @function getProductById
 */
export const getProductById = async ({ id }, knex) => {
  const response = await productRepository.getProductById({ id }, knex);

  return response;
};
/**
 * @function addProduct
 */
export const addProduct = async (body, knex) => {
  const response = await productRepository.addProduct(body, knex);
  return response;
};
/**
 * @function updateProduct
 */
export const updateProduct = async ({ id }, body, knex) => {
  const response = await productRepository.updateProduct({ id }, body, knex);

  return response;
};
/**
 * @function deleteProduct
 */
export const deleteProduct = async ({ id }, knex) => {
  const response = await productRepository.deleteProduct({ id }, knex);

  return response;
};

export default { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
