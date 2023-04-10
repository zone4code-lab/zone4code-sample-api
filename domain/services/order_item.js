import * as order_itemRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getOrder_items
 */

export const getOrder_items = async (knex) => {
  const response = await order_itemRepository.getOrder_items(knex);
  return response;
};
/**
 * @function getOrder_itemById
 */
export const getOrder_itemById = async ({ id }, knex) => {
  const response = await order_itemRepository.getOrder_itemById({ id }, knex);

  return response;
};
/**
 * @function addOrder_item
 */
export const addOrder_item = async (body, knex) => {
  const response = await order_itemRepository.addOrder_item(body, knex);

  return response;
};
/**
 * @function updateOrder_item
 */
export const updateOrder_item = async ({ id }, body, knex) => {
  const response = await order_itemRepository.updateOrder_item({ id }, body, knex);

  return response;
};
/**
 * @function deleteOrder_item
 */
export const deleteOrder_item = async ({ id }, knex) => {
  const response = await order_itemRepository.deleteOrder_item({ id }, knex);

  return response;
};

export default { getOrder_items, getOrder_itemById, addOrder_item, updateOrder_item, deleteOrder_item };
