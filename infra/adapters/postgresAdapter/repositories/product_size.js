/* import * as Models from '../models'; */
import Product_size from '../schema/product_size';
/**
 * @function getProduct_sizes
 */
export const getProduct_sizes = async (knex) => {
  try {
    const data = await Product_size.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getProduct_sizeById
 */
export const getProduct_sizeById = async ({ id }, knex) => {
  try {
    const data = await Product_size.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addProduct_size
 */
export const addProduct_size = async (body, knex) => {
  try {
    const data = await Product_size.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateProduct_size
 */
export const updateProduct_size = async ({ id }, body, knex) => {
  try {
    const data = await Product_size.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteProduct_size
 */
export const deleteProduct_size = async ({ id }, knex) => {
  try {
    await Product_size.query(knex).deleteById(id);
    return { result: { status: '200', message: `Product_size with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getProduct_sizes, getProduct_sizeById, addProduct_size, updateProduct_size, deleteProduct_size };
