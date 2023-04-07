import validators from '../utils/validators';
import * as priceService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetPrice
 */

export const validateAndGetPrices = async ({ clientId }, knex) => {
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
        name: 'Price',
        status: 400,
        code: 'invalid_get_Price',
        message: `Invalid get Price input data ${JSON.stringify(errors)}`,
        debugMessage: '[Price] Error in getPriceById.',
        error: errors,
      })
    );
  }

  const data = await priceService.getPrices(knex);
  return data;
};

/**
 * @function validateAndGetByIdPrice
 */

export const validateAndGetByIdPrice = ({ id, clientId }, knex) => {
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
        name: 'Price',
        status: 400,
        code: 'invalid_get_Price',
        message: `Invalid get Price input data ${JSON.stringify(errors)}`,
        debugMessage: '[Price] Error in getPriceById.',
        error: errors,
      })
    );
  }
  return priceService.getPriceById({ id }, knex);
};

/**
 * @function validateAndAddPrice
 */

export const validateAndAddPrice = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.size_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.size_id = errorMessage;
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
        name: 'Price',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Price input data ${JSON.stringify(errors)}`,
        debugMessage: '[Price] Error in createPrice.',
        error: errors,
      })
    );
  }
  return priceService.addPrice(body, knex);
};

/**
 * @function validateAndUpdatePrice
 */

export const validateAndUpdatePrice = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.size_id) {
    errorMessage = validators.isPositiveInteger(body.size_id, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.size_id = errorMessage;
    }
  }
  if (body.type_id) {
    errorMessage = validators.isPositiveInteger(body.type_id, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.type_id = errorMessage;
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
        name: 'Price',
        status: 400,
        code: 'invalid_update_Price',
        message: `Invalid update Price input data ${JSON.stringify(errors)}`,
        debugMessage: '[Price] Error in updatePrice.',
        error: errors,
      })
    );
  }

  return priceService.updatePrice({ id }, body, knex);
};

/**
 * @function validateAndDeletePrice
 */

export const validateAndDeletePrice = ({ id, clientId }, knex) => {
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
        name: 'Price',
        status: 400,
        code: 'invalid_delete_Price',
        message: `Invalid get Price input data ${JSON.stringify(errors)}`,
        debugMessage: '[Price] Error in deletePrice.',
        error: errors,
      })
    );
  }
  return priceService.deletePrice({ id }, knex);
};
export default { validateAndGetPrices, validateAndUpdatePrice, validateAndDeletePrice, validateAndGetByIdPrice };

