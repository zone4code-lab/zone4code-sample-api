import validators from '../utils/validators';
import * as product_sizeService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetProduct_size
 */

export const validateAndGetProduct_sizes = async ({ clientId }, knex) => {
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
        name: 'Product_size',
        status: 400,
        code: 'invalid_get_Product_size',
        message: `Invalid get Product_size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_size] Error in getProduct_sizeById.',
        error: errors,
      })
    );
  }

  const data = await product_sizeService.getProduct_sizes(knex);
  return data;
};

/**
 * @function validateAndGetByIdProduct_size
 */

export const validateAndGetByIdProduct_size = ({ id, clientId }, knex) => {
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
        name: 'Product_size',
        status: 400,
        code: 'invalid_get_Product_size',
        message: `Invalid get Product_size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_size] Error in getProduct_sizeById.',
        error: errors,
      })
    );
  }
  return product_sizeService.getProduct_sizeById({ id }, knex);
};

/**
 * @function validateAndAddProduct_size
 */

export const validateAndAddProduct_size = ({ clientId }, body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.product_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.product_id = errorMessage;
  }
  errorMessage = validators.isPositiveInteger(body.size_id, {
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

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Product_size',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Product_size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_size] Error in createProduct_size.',
        error: errors,
      })
    );
  }
  return product_sizeService.addProduct_size(body, knex);
};

/**
 * @function validateAndUpdateProduct_size
 */

export const validateAndUpdateProduct_size = ({ id, clientId }, body, knex) => {
  const errors = {};

  let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.product_id) {
    errorMessage = validators.isPositiveInteger(body.product_id, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.name = errorMessage;
    }
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
        name: 'Product_size',
        status: 400,
        code: 'invalid_update_Product_size',
        message: `Invalid update Product_size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_size] Error in updateProduct_size.',
        error: errors,
      })
    );
  }

  return product_sizeService.updateProduct_size({ id }, body, knex);
};

/**
 * @function validateAndDeleteProduct_size
 */

export const validateAndDeleteProduct_size = ({ id, clientId }, knex) => {
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
        name: 'Product_size',
        status: 400,
        code: 'invalid_delete_Product_size',
        message: `Invalid get Product_size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_size] Error in deleteProduct_size.',
        error: errors,
      })
    );
  }
  return product_sizeService.deleteProduct_size({ id }, knex);
};
export default { validateAndGetProduct_sizes, validateAndUpdateProduct_size, validateAndDeleteProduct_size, validateAndGetByIdProduct_size };
