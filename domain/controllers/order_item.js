import * as validateOrder_item from '../validations';

export const getOrder_items = async (req) => {
  const Order_item = await validateOrder_item.validateAndGetOrder_items(req.params, req.knex);
  return Order_item;
};

export const getOrder_itemById = async (req) => {
  const singleOrder_item = await validateOrder_item.validateAndGetByIdOrder_item(req.params, req.knex);
  return singleOrder_item;
};

export const addOrder_item = async (req) => {
  const addOrder_item = await validateOrder_item.validateAndAddOrder_item(req.params, req.body, req.knex);
  return addOrder_item;
};

export const updateOrder_item = async (req) => {
  const editOrder_item = await validateOrder_item.validateAndUpdateOrder_item(req.params, req.body, req.knex);
  return editOrder_item;
};

export const deleteOrder_item = async (req) => {
  const deleteOrder_item = await validateOrder_item.validateAndDeleteOrder_item(req.params, req.knex);
  return deleteOrder_item;
};

export default { getOrder_items, getOrder_itemById, addOrder_item, updateOrder_item, deleteOrder_item };