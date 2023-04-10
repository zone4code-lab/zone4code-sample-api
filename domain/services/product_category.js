import * as product_categoryRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getProduct_categorys
 */

export const getProduct_categorys = async (knex) => {
  const response = await product_categoryRepository.getProduct_categorys(knex);
  return response;
};
/**
 * @function getProduct_categoryById
 */
export const getProduct_categoryById = async ({ id }, knex) => {
  const response = await product_categoryRepository.getProduct_categoryById({ id }, knex);

  return response;
};
/**
 * @function addProduct_category
 */
export const addProduct_category = async (body, knex) => {
  const response = await product_categoryRepository.addProduct_category(body, knex);

  return response;
};
/**
 * @function updateProduct_category
 */
export const updateProduct_category = async ({ id }, body, knex) => {
  const response = await product_categoryRepository.updateProduct_category({ id }, body, knex);

  return response;
};
/**
 * @function deleteProduct_category
 */
export const deleteProduct_category = async ({ id }, knex) => {
  const response = await product_categoryRepository.deleteProduct_category({ id }, knex);

  return response;
};

export default { getProduct_categorys, getProduct_categoryById, addProduct_category, updateProduct_category, deleteProduct_category };
