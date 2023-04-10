/* import * as Models from '../models'; */
import Product_extra from '../schema/product_extra';
/**
 * @function getProduct_extras
 */
export const getProduct_extras = async (knex) => {
  try {
    const data = await Product_extra.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getProduct_extraById
 */
export const getProduct_extraById = async ({ id }, knex) => {
  try {
    const data = await Product_extra.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addProduct_extra
 */
export const addProduct_extra = async (body, knex) => {
  try {
    const data = await Product_extra.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateProduct_extra
 */
export const updateProduct_extra = async ({ id }, body, knex) => {
  try {
    const data = await Product_extra.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteProduct_extra
 */
export const deleteProduct_extra = async ({ id }, knex) => {
  try {
    await Product_extra.query(knex).deleteById(id);
    return { result: { status: '200', message: `Product_extra with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getProduct_extras, getProduct_extraById, addProduct_extra, updateProduct_extra, deleteProduct_extra };
