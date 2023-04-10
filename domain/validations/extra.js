import validators from '../utils/validators';
import * as extraService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetExtra
 */

export const validateAndGetExtras = async ({ clientId }, knex) => {
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
        name: 'Extra',
        status: 400,
        code: 'invalid_get_Extra',
        message: `Invalid get Extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Extra] Error in getExtraById.',
        error: errors,
      })
    );
  }

  const data = await extraService.getExtras(knex);
  return data;
};

/**
 * @function validateAndGetByIdExtra
 */

export const validateAndGetByIdExtra = ({ id, clientId }, knex) => {
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
        name: 'Extra',
        status: 400,
        code: 'invalid_get_Extra',
        message: `Invalid get Extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Extra] Error in getExtraById.',
        error: errors,
      })
    );
  }
  return extraService.getExtraById({ id }, knex);
};

/**
 * @function validateAndAddExtra
 */

export const validateAndAddExtra = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.extra, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.extra = errorMessage;
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
        name: 'Extra',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Extra] Error in createExtra.',
        error: errors,
      })
    );
  }
  return extraService.addExtra(body, knex);
};

/**
 * @function validateAndUpdateExtra
 */

export const validateAndUpdateExtra = ({ id, clientId }, body, knex) => {
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
        name: 'Extra',
        status: 400,
        code: 'invalid_update_Extra',
        message: `Invalid update Extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Extra] Error in updateExtra.',
        error: errors,
      })
    );
  }

  return extraService.updateExtra({ id }, body, knex);
};

/**
 * @function validateAndDeleteExtra
 */

export const validateAndDeleteExtra = ({ id, clientId }, knex) => {
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
        name: 'Extra',
        status: 400,
        code: 'invalid_delete_Extra',
        message: `Invalid get Extra input data ${JSON.stringify(errors)}`,
        debugMessage: '[Extra] Error in deleteExtra.',
        error: errors,
      })
    );
  }
  return extraService.deleteExtra({ id }, knex);
};
export default { validateAndGetExtras, validateAndUpdateExtra, validateAndDeleteExtra, validateAndGetByIdExtra };

