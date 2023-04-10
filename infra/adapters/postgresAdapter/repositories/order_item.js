/* import * as Models from '../models'; */
import Order_item from '../schema/order_item';
/**
 * @function getOrder_items
 */
export const getOrder_items = async (knex) => {
  try {
    const data = await Order_item.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getOrder_itemById
 */
export const getOrder_itemById = async ({ id }, knex) => {
  try {
    const data = await Order_item.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addOrder_item
 */
export const addOrder_item = async (body, knex) => {
  try {
    const data = await Order_item.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateOrder_item
 */
export const updateOrder_item = async ({ id }, body, knex) => {
  try {
    const data = await Order_item.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteOrder_item
 */
export const deleteOrder_item = async ({ id }, knex) => {
  try {
    await Order_item.query(knex).deleteById(id);
    return { result: { status: '200', message: `Order_item with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getOrder_items, getOrder_itemById, addOrder_item, updateOrder_item, deleteOrder_item };
