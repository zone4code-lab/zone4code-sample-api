/* import * as Models from '../models'; */
import Type from '../schema/type';
/**
 * @function getTypes
 */
export const getTypes = async (knex) => {
  try {
    const data = await Type.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getTypeById
 */
export const getTypeById = async ({ id }, knex) => {
  try {
    const data = await Type.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addType
 */
export const addType = async (body, knex) => {
  try {
    const data = await Type.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateType
 */
export const updateType = async ({ id }, body, knex) => {
  try {
    const data = await Type.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteType
 */
export const deleteType = async ({ id }, knex) => {
  try {
    await Type.query(knex).deleteById(id);
    return { result: { status: '200', message: `Type with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getTypes, getTypeById, addType, updateType, deleteType };
