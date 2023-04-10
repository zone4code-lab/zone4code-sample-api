import * as validateCategory from '../validations';

export const getCategorys = async (req) => {
  const Category = await validateCategory.validateAndGetCategorys(req.params, req.knex);
  return Category;
};

export const getCategoryById = async (req) => {
  const singleCategory = await validateCategory.validateAndGetByIdCategory(req.params, req.knex);
  return singleCategory;
};

export const addCategory = async (req) => {
  const addCategory = await validateCategory.validateAndAddCategory(req.params, req.body, req.knex);
  return addCategory;
};

export const updateCategory = async (req) => {
  const editCategory = await validateCategory.validateAndUpdateCategory(req.params, req.body, req.knex);
  return editCategory;
};

export const deleteCategory = async (req) => {
  const deleteCategory = await validateCategory.validateAndDeleteCategory(req.params, req.knex);
  return deleteCategory;
};

export default { getCategorys, getCategoryById, addCategory, updateCategory, deleteCategory };