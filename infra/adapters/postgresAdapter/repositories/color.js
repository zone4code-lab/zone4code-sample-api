/* import * as Models from '../models'; */
import Color from '../schema/color';
/**
 * @function getColors
 */
export const getColors = async (knex) => {
  try {
    const data = await Color.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getColorById
 */
export const getColorById = async ({ id }, knex) => {
  try {
    const data = await Color.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addColor
 */
export const addColor = async (body, knex) => {
  try {
    const data = await Color.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateColor
 */
export const updateColor = async ({ id }, body, knex) => {
  try {
    const data = await Color.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteColor
 */
export const deleteColor = async ({ id }, knex) => {
  try {
    await Color.query(knex).deleteById(id);
    return { result: { status: '200', message: `Color with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getColors, getColorById, addColor, updateColor, deleteColor };
