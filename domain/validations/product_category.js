import validators from '../utils/validators';
import * as product_categoryService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetProduct_category
 */

export const validateAndGetProduct_categorys = async ({ clientId }, knex) => {
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
        name: 'Product_category',
        status: 400,
        code: 'invalid_get_Product_category',
        message: `Invalid get Product_category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_category] Error in getProduct_categoryById.',
        error: errors,
      })
    );
  }

  const data = await product_categoryService.getProduct_categorys(knex);
  return data;
};

/**
 * @function validateAndGetByIdProduct_category
 */

export const validateAndGetByIdProduct_category = ({ id, clientId }, knex) => {
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
        name: 'Product_category',
        status: 400,
        code: 'invalid_get_Product_category',
        message: `Invalid get Product_category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_category] Error in getProduct_categoryById.',
        error: errors,
      })
    );
  }
  return product_categoryService.getProduct_categoryById({ id }, knex);
};

/**
 * @function validateAndAddProduct_category
 */

export const validateAndAddProduct_category = ({clientId},body, knex) => {
  const errors = {};

  let errorMessage = validators.isString(clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Product_category',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Product_category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_category] Error in createProduct_category.',
        error: errors,
      })
    );
  }
  return product_categoryService.addProduct_category(body, knex);
};

/**
 * @function validateAndUpdateProduct_category
 */

export const validateAndUpdateProduct_category = ({ id, clientId }, body, knex) => {
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
        name: 'Product_category',
        status: 400,
        code: 'invalid_update_Product_category',
        message: `Invalid update Product_category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_category] Error in updateProduct_category.',
        error: errors,
      })
    );
  }

  return product_categoryService.updateProduct_category({ id }, body, knex);
};

/**
 * @function validateAndDeleteProduct_category
 */

export const validateAndDeleteProduct_category = ({ id, clientId }, knex) => {
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
        name: 'Product_category',
        status: 400,
        code: 'invalid_delete_Product_category',
        message: `Invalid get Product_category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Product_category] Error in deleteProduct_category.',
        error: errors,
      })
    );
  }
  return product_categoryService.deleteProduct_category({ id }, knex);
};
export default { validateAndGetProduct_categorys, validateAndUpdateProduct_category, validateAndDeleteProduct_category, validateAndGetByIdProduct_category };

