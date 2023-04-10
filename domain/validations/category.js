import validators from '../utils/validators';
import * as categoryService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetCategory
 */

export const validateAndGetCategorys = async ({ clientId }, knex) => {
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
        name: 'Category',
        status: 400,
        code: 'invalid_get_Category',
        message: `Invalid get Category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Category] Error in getCategoryById.',
        error: errors,
      })
    );
  }

  const data = await categoryService.getCategorys(knex);
  return data;
};

/**
 * @function validateAndGetByIdCategory
 */

export const validateAndGetByIdCategory = ({ id, clientId }, knex) => {
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
        name: 'Category',
        status: 400,
        code: 'invalid_get_Category',
        message: `Invalid get Category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Category] Error in getCategoryById.',
        error: errors,
      })
    );
  }
  return categoryService.getCategoryById({ id }, knex);
};

/**
 * @function validateAndAddCategory
 */

export const validateAndAddCategory = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.name, {
    required: true,
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

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Category',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Category] Error in createCategory.',
        error: errors,
      })
    );
  }
  return categoryService.addCategory(body, knex);
};

/**
 * @function validateAndUpdateCategory
 */

export const validateAndUpdateCategory = ({ id, clientId }, body, knex) => {
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
        name: 'Category',
        status: 400,
        code: 'invalid_update_Category',
        message: `Invalid update Category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Category] Error in updateCategory.',
        error: errors,
      })
    );
  }

  return categoryService.updateCategory({ id }, body, knex);
};

/**
 * @function validateAndDeleteCategory
 */

export const validateAndDeleteCategory = ({ id, clientId }, knex) => {
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
        name: 'Category',
        status: 400,
        code: 'invalid_delete_Category',
        message: `Invalid get Category input data ${JSON.stringify(errors)}`,
        debugMessage: '[Category] Error in deleteCategory.',
        error: errors,
      })
    );
  }
  return categoryService.deleteCategory({ id }, knex);
};
export default { validateAndGetCategorys, validateAndUpdateCategory, validateAndDeleteCategory, validateAndGetByIdCategory };

