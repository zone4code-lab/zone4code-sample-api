import * as orderRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getOrders
 */

export const getOrders = async (knex) => {
  const response = await orderRepository.getOrders(knex);
  return response;
};
/**
 * @function getOrderById
 */
export const getOrderById = async ({ id }, knex) => {
  const response = await orderRepository.getOrderById({ id }, knex);

  return response;
};
/**
 * @function addOrder
 */
export const addOrder = async (body, knex) => {
  const response = await orderRepository.addOrder(body, knex);

  return response;
};
/**
 * @function updateOrder
 */
export const updateOrder = async ({ id }, body, knex) => {
  const response = await orderRepository.updateOrder({ id }, body, knex);

  return response;
};
/**
 * @function deleteOrder
 */
export const deleteOrder = async ({ id }, knex) => {
  const response = await orderRepository.deleteOrder({ id }, knex);

  return response;
};

export default { getOrders, getOrderById, addOrder, updateOrder, deleteOrder };
