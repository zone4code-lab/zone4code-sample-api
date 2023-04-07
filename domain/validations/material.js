import validators from '../utils/validators';
import * as materialService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetMaterial
 */

export const validateAndGetMaterials = async ({ clientId }, knex) => {
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
        name: 'Material',
        status: 400,
        code: 'invalid_get_Material',
        message: `Invalid get Material input data ${JSON.stringify(errors)}`,
        debugMessage: '[Material] Error in getMaterialById.',
        error: errors,
      })
    );
  }

  const data = await materialService.getMaterials(knex);
  return data;
};

/**
 * @function validateAndGetByIdMaterial
 */

export const validateAndGetByIdMaterial = ({ id, clientId }, knex) => {
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
        name: 'Material',
        status: 400,
        code: 'invalid_get_Material',
        message: `Invalid get Material input data ${JSON.stringify(errors)}`,
        debugMessage: '[Material] Error in getMaterialById.',
        error: errors,
      })
    );
  }
  return materialService.getMaterialById({ id }, knex);
};

/**
 * @function validateAndAddMaterial
 */

export const validateAndAddMaterial = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.type_id, {
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
  errorMessage = validators.isString(body.composition, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.composition = errorMessage;
  }

  if (!validators.isEmptyObject(errors)) {
    return Promise.reject(
      new ValidationError({
        name: 'Material',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Material input data ${JSON.stringify(errors)}`,
        debugMessage: '[Material] Error in createMaterial.',
        error: errors,
      })
    );
  }
  return materialService.addMaterial(body, knex);
};

/**
 * @function validateAndUpdateMaterial
 */

export const validateAndUpdateMaterial = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.type_id) {
    errorMessage = validators.isPositiveInteger(body.type_id, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.type_id = errorMessage;
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
        name: 'Material',
        status: 400,
        code: 'invalid_update_Material',
        message: `Invalid update Material input data ${JSON.stringify(errors)}`,
        debugMessage: '[Material] Error in updateMaterial.',
        error: errors,
      })
    );
  }

  return materialService.updateMaterial({ id }, body, knex);
};

/**
 * @function validateAndDeleteMaterial
 */

export const validateAndDeleteMaterial = ({ id, clientId }, knex) => {
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
        name: 'Material',
        status: 400,
        code: 'invalid_delete_Material',
        message: `Invalid get Material input data ${JSON.stringify(errors)}`,
        debugMessage: '[Material] Error in deleteMaterial.',
        error: errors,
      })
    );
  }
  return materialService.deleteMaterial({ id }, knex);
};
export default { validateAndGetMaterials, validateAndUpdateMaterial, validateAndDeleteMaterial, validateAndGetByIdMaterial };

