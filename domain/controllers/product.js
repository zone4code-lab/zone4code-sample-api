import * as validateProduct from '../validations';

export const getProducts = async (req) => {
  const Product = await validateProduct.validateAndGetProducts(req.params, req.knex);
  return Product;
};

export const getProductById = async (req) => {
  const singleProduct = await validateProduct.validateAndGetByIdProduct(req.params, req.knex);
  return singleProduct;
};
export const getTypeByProductId = async (req) => {
  const types = await validateProduct.validateAndGetTypeByIdProduct(req.params, req.knex);
  return types;
};

export const addProduct = async (req) => {
  const addProduct = await validateProduct.validateAndAddProduct(req.params, req.body, req.knex);
  return addProduct;
};

export const updateProduct = async (req) => {
  const editProduct = await validateProduct.validateAndUpdateProduct(req.params, req.body, req.knex);
  return editProduct;
};

export const deleteProduct = async (req) => {
  const deleteProduct = await validateProduct.validateAndDeleteProduct(req.params, req.knex);
  return deleteProduct;
};

export default { getProducts, getProductById, addProduct, updateProduct, deleteProduct };