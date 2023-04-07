/* import * as Models from '../models'; */
import Product from '../schema/product';
/**
 * @function getProducts
 */
export const getProducts = async (knex) => {
  try {
    const data = await Product.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getProductById
 */
export const getProductById = async ({ id }, knex) => {
  try {
    const data = await Product.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addProduct
 */
export const addProduct = async (body, knex) => {
  try {
    const data = await Product.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateProduct
 */
export const updateProduct = async ({ id }, body, knex) => {
  try {
    const data = await Product.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteProduct
 */
export const deleteProduct = async ({ id }, knex) => {
  try {
    await Product.query(knex).deleteById(id);
    return { result: { status: '200', message: `Product with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
