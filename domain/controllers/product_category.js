import * as validateProduct_category from '../validations';

export const getProduct_categorys = async (req) => {
  const Product_category = await validateProduct_category.validateAndGetProduct_categorys(req.params, req.knex);
  return Product_category;
};

export const getProduct_categoryById = async (req) => {
  const singleProduct_category = await validateProduct_category.validateAndGetByIdProduct_category(req.params, req.knex);
  return singleProduct_category;
};

export const addProduct_category = async (req) => {
  const addProduct_category = await validateProduct_category.validateAndAddProduct_category(req.params, req.body, req.knex);
  return addProduct_category;
};

export const updateProduct_category = async (req) => {
  const editProduct_category = await validateProduct_category.validateAndUpdateProduct_category(req.params, req.body, req.knex);
  return editProduct_category;
};

export const deleteProduct_category = async (req) => {
  const deleteProduct_category = await validateProduct_category.validateAndDeleteProduct_category(req.params, req.knex);
  return deleteProduct_category;
};

export default { getProduct_categorys, getProduct_categoryById, addProduct_category, updateProduct_category, deleteProduct_category };