/* import * as Models from '../models'; */
import Product_category from '../schema/product_category';
/**
 * @function getProduct_categorys
 */
export const getProduct_categorys = async (knex) => {
  try {
    const data = await Product_category.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getProduct_categoryById
 */
export const getProduct_categoryById = async ({ id }, knex) => {
  try {
    const data = await Product_category.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addProduct_category
 */
export const addProduct_category = async (body, knex) => {
  try {
    const data = await Product_category.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateProduct_category
 */
export const updateProduct_category = async ({ id }, body, knex) => {
  try {
    const data = await Product_category.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteProduct_category
 */
export const deleteProduct_category = async ({ id }, knex) => {
  try {
    await Product_category.query(knex).deleteById(id);
    return { result: { status: '200', message: `Product_category with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getProduct_categorys, getProduct_categoryById, addProduct_category, updateProduct_category, deleteProduct_category };
