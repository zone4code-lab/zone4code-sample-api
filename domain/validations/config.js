import validators from '../utils/validators';
import * as configService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetConfig
 */

export const validateAndGetConfigs = async ({ clientId }) => {
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
        name: 'Config',
        status: 400,
        code: 'invalid_get_Config',
        message: `Invalid get Config input data ${JSON.stringify(errors)}`,
        debugMessage: '[Config] Error in getConfigById.',
        error: errors,
      })
    );
  }

  const data = await configService.getConfigs({ clientId });
  return data;
};

/**
 * @function validateAndGetByIdConfig
 */

export const validateAndGetByIdConfig = ({ id, clientId }) => {
  const errors = {};

  let errorMessage = validators.isObjectID(id, {
    required: true,
    min: 1,
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
        name: 'Config',
        status: 400,
        code: 'invalid_get_Config',
        message: `Invalid get Config input data ${JSON.stringify(errors)}`,
        debugMessage: '[Config] Error in getConfigById.',
        error: errors,
      })
    );
  }
  return configService.getConfigById({ id, clientId });
};

/**
 * @function validateAndAddConfig
 */

export const validateAndAddConfig = (data) => {
  const errors = {};
  let errorMessage = validators.isString(data.size, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.size = errorMessage;
  }

  errorMessage = validators.isArray(data.extension, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.extension = errorMessage;
  }

  errorMessage = validators.isString(data.clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Config',
        status: 400,
        code: 'invalid_create_Config',
        message: `Invalid create Config input data ${JSON.stringify(errors)}`,
        debugMessage: '[Config] Error in createConfig.',
        error: errors,
      })
    );
  }
console.log('data :>> ', data);
  return configService.addConfig({ ...data });
};

/**
 * @function validateAndUpdateConfig
 */

export const validateAndUpdateConfig = ({ id }, data) => {
  const errors = {};

  let errorMessage = validators.isObjectID(id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (data.size) {
    errorMessage = validators.isString(data.size, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.size = errorMessage;
    }
  }
  if (data.extension) {
    errorMessage = validators.isString(data.extension, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.extension = errorMessage;
    }
  }

  errorMessage = validators.isString(data.clientId, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.clientId = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Config',
        status: 400,
        code: 'invalid_update_Config',
        message: `Invalid update Config input data ${JSON.stringify(errors)}`,
        debugMessage: '[Config] Error in updateConfig.',
        error: errors,
      })
    );
  }

  return configService.updateConfig({ id, data, clientId: data.clientId });
};

/**
 * @function validateAndDeleteConfig
 */

export const validateAndDeleteConfig = ({ id, clientId }) => {
  const errors = {};

  let errorMessage = validators.isObjectID(id, {
    required: true,
    min: 1,
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
        name: 'Config',
        status: 400,
        code: 'invalid_delete_Config',
        message: `Invalid get Config input data ${JSON.stringify(errors)}`,
        debugMessage: '[Config] Error in deleteConfig.',
        error: errors,
      })
    );
  }
  return configService.deleteConfig({ id });
};

export default { validateAndGetConfigs, validateAndUpdateConfig, validateAndDeleteConfig, validateAndGetByIdConfig };
