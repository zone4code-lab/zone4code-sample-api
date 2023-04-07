import validators from '../utils/validators';
import * as sizeService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetSize
 */

export const validateAndGetSizes = async ({ clientId }, knex) => {
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
        name: 'Size',
        status: 400,
        code: 'invalid_get_Size',
        message: `Invalid get Size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Size] Error in getSizeById.',
        error: errors,
      })
    );
  }

  const data = await sizeService.getSizes(knex);
  return data;
};

/**
 * @function validateAndGetByIdSize
 */

export const validateAndGetByIdSize = ({ id, clientId }, knex) => {
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
        name: 'Size',
        status: 400,
        code: 'invalid_get_Size',
        message: `Invalid get Size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Size] Error in getSizeById.',
        error: errors,
      })
    );
  }
  return sizeService.getSizeById({ id }, knex);
};

/**
 * @function validateAndAddSize
 */

export const validateAndAddSize = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.size, {
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
        name: 'Size',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Size] Error in createSize.',
        error: errors,
      })
    );
  }
  return sizeService.addSize(body, knex);
};

/**
 * @function validateAndUpdateSize
 */

export const validateAndUpdateSize = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.name) {
    errorMessage = validators.isString(body.size, {
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
        name: 'Size',
        status: 400,
        code: 'invalid_update_Size',
        message: `Invalid update Size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Size] Error in updateSize.',
        error: errors,
      })
    );
  }

  return sizeService.updateSize({ id }, body, knex);
};

/**
 * @function validateAndDeleteSize
 */

export const validateAndDeleteSize = ({ id, clientId }, knex) => {
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
        name: 'Size',
        status: 400,
        code: 'invalid_delete_Size',
        message: `Invalid get Size input data ${JSON.stringify(errors)}`,
        debugMessage: '[Size] Error in deleteSize.',
        error: errors,
      })
    );
  }
  return sizeService.deleteSize({ id }, knex);
};
export default { validateAndGetSizes, validateAndUpdateSize, validateAndDeleteSize, validateAndGetByIdSize };

