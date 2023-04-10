/* import * as Models from '../models'; */
import Price from '../schema/price';
/**
 * @function getPrices
 */
export const getPrices = async (knex) => {
  try {
    const data = await Price.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getPriceById
 */
export const getPriceById = async ({ id }, knex) => {
  try {
    const data = await Price.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addPrice
 */
export const addPrice = async (body, knex) => {
  try {
    const data = await Price.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updatePrice
 */
export const updatePrice = async ({ id }, body, knex) => {
  try {
    const data = await Price.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deletePrice
 */
export const deletePrice = async ({ id }, knex) => {
  try {
    await Price.query(knex).deleteById(id);
    return { result: { status: '200', message: `Price with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getPrices, getPriceById, addPrice, updatePrice, deletePrice };
