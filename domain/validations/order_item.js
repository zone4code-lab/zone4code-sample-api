import validators from '../utils/validators';
import * as order_itemService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetOrder_item
 */

export const validateAndGetOrder_items = async ({ clientId }, knex) => {
  const errors = {};

  const errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Order_item',
        status: 400,
        code: 'invalid_get_Order_item',
        message: `Invalid get Order_item input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order_item] Error in getOrder_itemById.',
        error: errors,
      })
    );
  }

  const data = await order_itemService.getOrder_items(knex);
  return data;
};

/**
 * @function validateAndGetByIdOrder_item
 */

export const validateAndGetByIdOrder_item = ({ id, clientId }, knex) => {
  const errors = {};

  let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Order_item',
        status: 400,
        code: 'invalid_get_Order_item',
        message: `Invalid get Order_item input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order_item] Error in getOrder_itemById.',
        error: errors,
      })
    );
  }
  return order_itemService.getOrder_itemById({ id }, knex);
};

/**
 * @function validateAndAddOrder_item
 */

export const validateAndAddOrder_item = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.order_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.order_id = errorMessage;
  }
  errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }
  errorMessage = validators.isPositiveInteger(body.type_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.type_id = errorMessage;
  }
  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Order_item',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Order_item input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order_item] Error in createOrder_item.',
        error: errors,
      })
    );
  }
  return order_itemService.addOrder_item(body, knex);
};

/**
 * @function validateAndUpdateOrder_item
 */

export const validateAndUpdateOrder_item = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Order_item',
        status: 400,
        code: 'invalid_update_Order_item',
        message: `Invalid update Order_item input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order_item] Error in updateOrder_item.',
        error: errors,
      })
    );
  }

  return order_itemService.updateOrder_item({ id }, body, knex);
};

/**
 * @function validateAndDeleteOrder_item
 */

export const validateAndDeleteOrder_item = ({ id, clientId }, knex) => {
  const errors = {};
   let errorMessage = validators.isString(id, {
    required: true,
  });

  errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    errors.id = errorMessage;
    return Promise.reject(
      new ValidationError({
        name: 'Order_item',
        status: 400,
        code: 'invalid_delete_Order_item',
        message: `Invalid get Order_item input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order_item] Error in deleteOrder_item.',
        error: errors,
      })
    );
  }
  return order_itemService.deleteOrder_item({ id }, knex);
};
export default { validateAndGetOrder_items, validateAndUpdateOrder_item, validateAndDeleteOrder_item, validateAndGetByIdOrder_item };

