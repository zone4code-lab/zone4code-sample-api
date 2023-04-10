/* import * as Models from '../models'; */
import Size from '../schema/size';
/**
 * @function getSizes
 */
export const getSizes = async (knex) => {
  try {
    const data = await Size.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getSizeById
 */
export const getSizeById = async ({ id }, knex) => {
  try {
    const data = await Size.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addSize
 */
export const addSize = async (body, knex) => {
  try {
    const data = await Size.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateSize
 */
export const updateSize = async ({ id }, body, knex) => {
  try {
    const data = await Size.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteSize
 */
export const deleteSize = async ({ id }, knex) => {
  try {
    await Size.query(knex).deleteById(id);
    return { result: { status: '200', message: `Size with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getSizes, getSizeById, addSize, updateSize, deleteSize };
