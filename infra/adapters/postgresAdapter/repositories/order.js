/* import * as Models from '../models'; */
import Order from '../schema/order';
/**
 * @function getOrders
 */
export const getOrders = async ({ knex }) => {
  try {
    const data = await Order.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getOrderById
 */
export const getOrderById = async ({ id }, knex) => {
  try {
    const data = await Order.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addOrder
 */
export const addOrder = async (body, knex) => {
  try {
    const data = await Order.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateOrder
 */
export const updateOrder = async ({ id }, body, knex) => {
  try {
    const data = await Order.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteOrder
 */
export const deleteOrder = async ({ id }, knex) => {
  try {
    await Order.query(knex).deleteById(id);
    return { result: { status: '200', message: `Order with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getOrders, getOrderById, addOrder, updateOrder, deleteOrder };
