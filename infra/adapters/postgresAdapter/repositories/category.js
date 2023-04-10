/* import * as Models from '../models'; */
import Category from '../schema/category';
/**
 * @function getCategorys
 */
export const getCategorys = async (knex) => {
  try {
    const data = await Category.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getCategoryById
 */
export const getCategoryById = async ({ id }, knex) => {
  try {
    const data = await Category.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addCategory
 */
export const addCategory = async (body, knex) => {
  try {
    const data = await Category.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateCategory
 */
export const updateCategory = async ({ id }, body, knex) => {
  try {
    const data = await Category.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteCategory
 */
export const deleteCategory = async ({ id }, knex) => {
  try {
    await Category.query(knex).deleteById(id);
    return { result: { status: '200', message: `Category with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getCategorys, getCategoryById, addCategory, updateCategory, deleteCategory };
