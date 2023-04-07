import validators from '../utils/validators';
import * as colorService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetColor
 */

export const validateAndGetColors = async ({ clientId }, knex) => {
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
        name: 'Color',
        status: 400,
        code: 'invalid_get_Color',
        message: `Invalid get Color input data ${JSON.stringify(errors)}`,
        debugMessage: '[Color] Error in getColorById.',
        error: errors,
      })
    );
  }

  const data = await colorService.getColors(knex);
  return data;
};

/**
 * @function validateAndGetByIdColor
 */

export const validateAndGetByIdColor = ({ id, clientId }, knex) => {
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
        name: 'Color',
        status: 400,
        code: 'invalid_get_Color',
        message: `Invalid get Color input data ${JSON.stringify(errors)}`,
        debugMessage: '[Color] Error in getColorById.',
        error: errors,
      })
    );
  }
  return colorService.getColorById({ id }, knex);
};

/**
 * @function validateAndAddColor
 */

export const validateAndAddColor = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isString(body.color, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.color = errorMessage;
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
        name: 'Color',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Color input data ${JSON.stringify(errors)}`,
        debugMessage: '[Color] Error in createColor.',
        error: errors,
      })
    );
  }
  return colorService.addColor(body, knex);
};

/**
 * @function validateAndUpdateColor
 */

export const validateAndUpdateColor = ({ id, clientId }, body, knex) => {
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
        name: 'Color',
        status: 400,
        code: 'invalid_update_Color',
        message: `Invalid update Color input data ${JSON.stringify(errors)}`,
        debugMessage: '[Color] Error in updateColor.',
        error: errors,
      })
    );
  }

  return colorService.updateColor({ id }, body, knex);
};

/**
 * @function validateAndDeleteColor
 */

export const validateAndDeleteColor = ({ id, clientId }, knex) => {
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
        name: 'Color',
        status: 400,
        code: 'invalid_delete_Color',
        message: `Invalid get Color input data ${JSON.stringify(errors)}`,
        debugMessage: '[Color] Error in deleteColor.',
        error: errors,
      })
    );
  }
  return colorService.deleteColor({ id }, knex);
};
export default { validateAndGetColors, validateAndUpdateColor, validateAndDeleteColor, validateAndGetByIdColor };

