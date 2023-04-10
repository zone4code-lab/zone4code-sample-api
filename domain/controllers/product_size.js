import * as validateProduct_size from '../validations';

export const getProduct_sizes = async (req) => {
  const Product_size = await validateProduct_size.validateAndGetProduct_sizes(req.params, req.knex);
  return Product_size;
};

export const getProduct_sizeById = async (req) => {
  const singleProduct_size = await validateProduct_size.validateAndGetByIdProduct_size(req.params, req.knex);
  return singleProduct_size;
};

export const addProduct_size = async (req) => {
  const addProduct_size = await validateProduct_size.validateAndAddProduct_size(req.params, req.body, req.knex);
  return addProduct_size;
};

export const updateProduct_size = async (req) => {
  const editProduct_size = await validateProduct_size.validateAndUpdateProduct_size(req.params, req.body, req.knex);
  return editProduct_size;
};

export const deleteProduct_size = async (req) => {
  const deleteProduct_size = await validateProduct_size.validateAndDeleteProduct_size(req.params, req.knex);
  return deleteProduct_size;
};

export default { getProduct_sizes, getProduct_sizeById, addProduct_size, updateProduct_size, deleteProduct_size };