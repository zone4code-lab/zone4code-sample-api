import validators from '../utils/validators';
import * as productService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetProduct
 */

export const validateAndGetProducts = async ({ clientId }, knex) => {
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
        name: 'Product',
        status: 400,
        code: 'invalid_get_Product',
        message: `Invalid get Product input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product] Error in getProductById.',
        error: errors,
      })
    );
  }

  const data = await productService.getProducts(knex);
  return data;
};

/**
 * @function validateAndGetByIdProduct
 */

export const validateAndGetByIdProduct = ({ id, clientId }, knex) => {
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
        name: 'Product',
        status: 400,
        code: 'invalid_get_Product',
        message: `Invalid get Product input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product] Error in getProductById.',
        error: errors,
      })
    );
  }
  return productService.getProductById({ id }, knex);
};

/**
 * @function validateAndAddProduct
 */

export const validateAndAddProduct = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.name, {
    required: true,
    min: 1,
  });
  errorMessage = validators.isString(body.description, {
    required: false,
    min: 1,
  });
  if (errorMessage !== null) {
    errors.description = errorMessage;
  }
  errorMessage = validators.isString(body.image, {
    required: false,
    min: 1,
  });
  if (errorMessage !== null) {
    errors.image = errorMessage;
  }

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

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Product',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Product input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product] Error in createProduct.',
        error: errors,
      })
    );
  }
  return productService.addProduct(body, knex);
};

/**
 * @function validateAndUpdateProduct
 */

export const validateAndUpdateProduct = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.name) {
    errorMessage = validators.isString(body.name, {
      required: true,
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
        name: 'Product',
        status: 400,
        code: 'invalid_update_Product',
        message: `Invalid update Product input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product] Error in updateProduct.',
        error: errors,
      })
    );
  }

  return productService.updateProduct({ id }, body, knex);
};

/**
 * @function validateAndDeleteProduct
 */

export const validateAndDeleteProduct = ({ id, clientId }, knex) => {
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
        name: 'Product',
        status: 400,
        code: 'invalid_delete_Product',
        message: `Invalid get Product input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product] Error in deleteProduct.',
        error: errors,
      })
    );
  }
  return productService.deleteProduct({ id }, knex);
};
export default { validateAndGetProducts, validateAndUpdateProduct, validateAndDeleteProduct, validateAndGetByIdProduct };

