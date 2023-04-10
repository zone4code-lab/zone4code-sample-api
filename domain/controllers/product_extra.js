import * as validateProduct_extra from '../validations';

export const getProduct_extras = async (req) => {
  const Product_extra = await validateProduct_extra.validateAndGetProduct_extras(req.params, req.knex);
  return Product_extra;
};

export const getProduct_extraById = async (req) => {
  const singleProduct_extra = await validateProduct_extra.validateAndGetByIdProduct_extra(req.params, req.knex);
  return singleProduct_extra;
};

export const addProduct_extra = async (req) => {
  const addProduct_extra = await validateProduct_extra.validateAndAddProduct_extra(req.params, req.body, req.knex);
  return addProduct_extra;
};

export const updateProduct_extra = async (req) => {
  const editProduct_extra = await validateProduct_extra.validateAndUpdateProduct_extra(req.params, req.body, req.knex);
  return editProduct_extra;
};

export const deleteProduct_extra = async (req) => {
  const deleteProduct_extra = await validateProduct_extra.validateAndDeleteProduct_extra(req.params, req.knex);
  return deleteProduct_extra;
};

export default { getProduct_extras, getProduct_extraById, addProduct_extra, updateProduct_extra, deleteProduct_extra };