import validators from '../utils/validators';
import * as typeService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetType
 */

export const validateAndGetTypes = async ({ clientId }, knex) => {
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
        name: 'Type',
        status: 400,
        code: 'invalid_get_Type',
        message: `Invalid get Type input data ${JSON.stringify(errors)}`,
        debugMessage: '[Type] Error in getTypeById.',
        error: errors,
      })
    );
  }

  const data = await typeService.getTypes(knex);
  return data;
};

/**
 * @function validateAndGetByIdType
 */

export const validateAndGetByIdType = ({ id, clientId }, knex) => {
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
        name: 'Type',
        status: 400,
        code: 'invalid_get_Type',
        message: `Invalid get Type input data ${JSON.stringify(errors)}`,
        debugMessage: '[Type] Error in getTypeById.',
        error: errors,
      })
    );
  }
  return typeService.getTypeById({ id }, knex);
};

/**
 * @function validateAndAddType
 */

export const validateAndAddType = ({clientId},body, knex) => {
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
        name: 'Type',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Type input data ${JSON.stringify(errors)}`,
        debugMessage: '[Type] Error in createType.',
        error: errors,
      })
    );
  }
  return typeService.addType(body, knex);
};

/**
 * @function validateAndUpdateType
 */

export const validateAndUpdateType = ({ id, clientId }, body, knex) => {
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
        name: 'Type',
        status: 400,
        code: 'invalid_update_Type',
        message: `Invalid update Type input data ${JSON.stringify(errors)}`,
        debugMessage: '[Type] Error in updateType.',
        error: errors,
      })
    );
  }

  return typeService.updateType({ id }, body, knex);
};

/**
 * @function validateAndDeleteType
 */

export const validateAndDeleteType = ({ id, clientId }, knex) => {
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
        name: 'Type',
        status: 400,
        code: 'invalid_delete_Type',
        message: `Invalid get Type input data ${JSON.stringify(errors)}`,
        debugMessage: '[Type] Error in deleteType.',
        error: errors,
      })
    );
  }
  return typeService.deleteType({ id }, knex);
};
export default { validateAndGetTypes, validateAndUpdateType, validateAndDeleteType, validateAndGetByIdType };

