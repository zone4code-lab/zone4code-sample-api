import validators from '../utils/validators';
import * as orderService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetOrder
 */

export const validateAndGetOrders = async ({ clientId }, knex) => {
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
        name: 'Order',
        status: 400,
        code: 'invalid_get_Order',
        message: `Invalid get Order input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order] Error in getOrderById.',
        error: errors,
      })
    );
  }

  const data = await orderService.getOrders(knex);
  return data;
};

/**
 * @function validateAndGetByIdOrder
 */

export const validateAndGetByIdOrder = ({ id, clientId }, knex) => {
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
        name: 'Order',
        status: 400,
        code: 'invalid_get_Order',
        message: `Invalid get Order input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order] Error in getOrderById.',
        error: errors,
      })
    );
  }
  return orderService.getOrderById({ id }, knex);
};

/**
 * @function validateAndAddOrder
 */

export const validateAndAddOrder = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.name, {
    required: false,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.name = errorMessage;
  }
  errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }
  errorMessage = validators.isString(body.customer_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.cutomer_id = errorMessage;
  }
  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Order',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Order input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order] Error in createOrder.',
        error: errors,
      })
    );
  }
  return orderService.addOrder(body, knex);
};

/**
 * @function validateAndUpdateOrder
 */

export const validateAndUpdateOrder = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.name) {
    errorMessage = validators.isString(body.name, {
      required: false,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.name = errorMessage;
    }
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
        name: 'Order',
        status: 400,
        code: 'invalid_update_Order',
        message: `Invalid update Order input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order] Error in updateOrder.',
        error: errors,
      })
    );
  }

  return orderService.updateOrder({ id }, body, knex);
};

/**
 * @function validateAndDeleteOrder
 */

export const validateAndDeleteOrder = ({ id, clientId }, knex) => {
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
        name: 'Order',
        status: 400,
        code: 'invalid_delete_Order',
        message: `Invalid get Order input data ${JSON.stringify(errors)}`,
        debugMessage: '[Order] Error in deleteOrder.',
        error: errors,
      })
    );
  }
  return orderService.deleteOrder({ id }, knex);
};
export default { validateAndGetOrders, validateAndUpdateOrder, validateAndDeleteOrder, validateAndGetByIdOrder };

