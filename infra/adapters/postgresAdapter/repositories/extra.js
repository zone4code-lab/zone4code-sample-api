/* import * as Models from '../models'; */
import Extra from '../schema/extra';
/**
 * @function getExtras
 */
export const getExtras = async (knex) => {
  try {
    const data = await Extra.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getExtraById
 */
export const getExtraById = async ({ id }, knex) => {
  try {
    const data = await Extra.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addExtra
 */
export const addExtra = async (body, knex) => {
  try {
    const data = await Extra.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateExtra
 */
export const updateExtra = async ({ id }, body, knex) => {
  try {
    const data = await Extra.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteExtra
 */
export const deleteExtra = async ({ id }, knex) => {
  try {
    await Extra.query(knex).deleteById(id);
    return { result: { status: '200', message: `Extra with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getExtras, getExtraById, addExtra, updateExtra, deleteExtra };
