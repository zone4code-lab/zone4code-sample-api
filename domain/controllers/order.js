import * as validateOrder from '../validations';

export const getOrders = async (req) => {
  const Order = await validateOrder.validateAndGetOrders(req.params, req.knex);
  return Order;
};

export const getOrderById = async (req) => {
  const singleOrder = await validateOrder.validateAndGetByIdOrder(req.params, req.knex);
  return singleOrder;
};

export const addOrder = async (req) => {
  const addOrder = await validateOrder.validateAndAddOrder(req.params, req.body, req.knex);
  return addOrder;
};

export const updateOrder = async (req) => {
  const editOrder = await validateOrder.validateAndUpdateOrder(req.params, req.body, req.knex);
  return editOrder;
};

export const deleteOrder = async (req) => {
  const deleteOrder = await validateOrder.validateAndDeleteOrder(req.params, req.knex);
  return deleteOrder;
};

export default { getOrders, getOrderById, addOrder, updateOrder, deleteOrder };