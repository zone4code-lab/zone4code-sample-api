import validators from '../utils/validators';
import * as product_extraService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetProduct_extra
 */

export const validateAndGetProduct_extras = async ({ clientId }, knex) => {
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
        name: 'Product_extra',
        status: 400,
        code: 'invalid_get_Product_extra',
        message: `Invalid get Product_extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_extra] Error in getProduct_extraById.',
        error: errors,
      })
    );
  }

  const data = await product_extraService.getProduct_extras(knex);
  return data;
};

/**
 * @function validateAndGetByIdProduct_extra
 */

export const validateAndGetByIdProduct_extra = ({ id, clientId }, knex) => {
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
        name: 'Product_extra',
        status: 400,
        code: 'invalid_get_Product_extra',
        message: `Invalid get Product_extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_extra] Error in getProduct_extraById.',
        error: errors,
      })
    );
  }
  return product_extraService.getProduct_extraById({ id }, knex);
};

/**
 * @function validateAndAddProduct_extra
 */

export const validateAndAddProduct_extra = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.extra_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.extra_id = errorMessage;
  }
  errorMessage = validators.isPositiveInteger(body.product_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.product_id = errorMessage;
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
        name: 'Product_extra',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Product_extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_extra] Error in createProduct_extra.',
        error: errors,
      })
    );
  }
  return product_extraService.addProduct_extra(body, knex);
};

/**
 * @function validateAndUpdateProduct_extra
 */

export const validateAndUpdateProduct_extra = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }
  errorMessage = validators.isPositiveInteger(body.extra_id, {
    required: false,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.extra_id = errorMessage;
  }
  errorMessage = validators.isPositiveInteger(body.product_id, {
    required: false,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.product_id = errorMessage;
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
        name: 'Product_extra',
        status: 400,
        code: 'invalid_update_Product_extra',
        message: `Invalid update Product_extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_extra] Error in updateProduct_extra.',
        error: errors,
      })
    );
  }

  return product_extraService.updateProduct_extra({ id }, body, knex);
};

/**
 * @function validateAndDeleteProduct_extra
 */

export const validateAndDeleteProduct_extra = ({ id, clientId }, knex) => {
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
        name: 'Product_extra',
        status: 400,
        code: 'invalid_delete_Product_extra',
        message: `Invalid get Product_extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_extra] Error in deleteProduct_extra.',
        error: errors,
      })
    );
  }
  return product_extraService.deleteProduct_extra({ id }, knex);
};
export default { validateAndGetProduct_extras, validateAndUpdateProduct_extra, validateAndDeleteProduct_extra, validateAndGetByIdProduct_extra };

