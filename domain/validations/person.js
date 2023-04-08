import validators from '../utils/validators';
import * as personService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetPerson
 */

export const validateAndGetPersons = async ({ clientId }, knex) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_get_Person',
        message: `Invalid get Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in getPersonById.',
        error: errors,
      })
    );
  }

  const data = await personService.getPersons(knex);
  return data;
};

/**
 * @function validateAndGetByIdPerson
 */

export const validateAndGetByIdPerson = ({ id, clientId }, knex) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_get_Person',
        message: `Invalid get Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in getPersonById.',
        error: errors,
      })
    );
  }
  return personService.getPersonById({ id }, knex);
};

/**
 * @function validateAndAddPerson
 */

export const validateAndAddPerson = ({clientId},body, knex) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in createPerson.',
        error: errors,
      })
    );
  }
  return personService.addPerson(body, knex);
};

/**
 * @function validateAndUpdatePerson
 */

export const validateAndUpdatePerson = ({ id, clientId }, body, knex) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_update_Person',
        message: `Invalid update Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in updatePerson.',
        error: errors,
      })
    );
  }

  return personService.updatePerson({ id }, body, knex);
};

/**
 * @function validateAndDeletePerson
 */

export const validateAndDeletePerson = ({ id, clientId }, knex) => {
  const errors = {};
   let errorMessage = validators.isPositiveInteger(id, {
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
        name: 'Person',
        status: 400,
        code: 'invalid_delete_Person',
        message: `Invalid get Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in deletePerson.',
        error: errors,
      })
    );
  }
  return personService.deletePerson({ id }, knex);
};
export default { validateAndGetPersons, validateAndUpdatePerson, validateAndDeletePerson, validateAndGetByIdPerson };

