import * as categoryRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getCategorys
 */

export const getCategorys = async (knex) => {
  const response = await categoryRepository.getCategorys(knex);
  return response;
};
/**
 * @function getCategoryById
 */
export const getCategoryById = async ({ id }, knex) => {
  const response = await categoryRepository.getCategoryById({ id }, knex);

  return response;
};
/**
 * @function addCategory
 */
export const addCategory = async (body, knex) => {
  const response = await categoryRepository.addCategory(body, knex);

  return response;
};
/**
 * @function updateCategory
 */
export const updateCategory = async ({ id }, body, knex) => {
  const response = await categoryRepository.updateCategory({ id }, body, knex);

  return response;
};
/**
 * @function deleteCategory
 */
export const deleteCategory = async ({ id }, knex) => {
  const response = await categoryRepository.deleteCategory({ id }, knex);

  return response;
};

export default { getCategorys, getCategoryById, addCategory, updateCategory, deleteCategory };
