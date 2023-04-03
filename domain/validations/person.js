import validators from '../utils/validators';
import * as personService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetPerson
 */



export const validateAndGetPersons = async ({ clientId }) => {
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

  const data = await personService.getPersons({ clientId });
  return data;
};

/**
 * @function validateAndGetByIdPerson
 */

export const validateAndGetByIdPerson = ({ id, clientId }) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_get_Person',
        message: `Invalid get Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in getPersonById.',
        error: errors,
      })
    );
  }
  return personService.getPersonById({ id, clientId });
};

/**
 * @function validateAndAddPerson
 */

export const validateAndAddPerson = (data) => {
  const errors = {};
  let errorMessage = validators.isString(data.name, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.name = errorMessage;
  }

  errorMessage = validators.isString(data.description, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.description = errorMessage;
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
        name: 'Person',
        status: 400,
        code: 'invalid_create_Person',
        message: `Invalid create Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in createPerson.',
        error: errors,
      })
    );
  }

  return personService.addPerson({ ...data });
};

/**
 * @function validateAndUpdatePerson
 */

export const validateAndUpdatePerson = ({ id, clientId }, body) => {
  const errors = {};

  let errorMessage = validators.isObjectID(id, {
    required: true,
    min: 1,
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
  if (body.description) {
    errorMessage = validators.isString(body.description, {
      required: true,
      min: 1,
    });
    if (errorMessage !== null) {
      errors.description = errorMessage;
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

  return personService.updatePerson({ id, body, clientId });
};

/**
 * @function validateAndDeletePerson
 */

export const validateAndDeletePerson = ({ id, clientId }) => {
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
        name: 'Person',
        status: 400,
        code: 'invalid_delete_Person',
        message: `Invalid get Person input data ${JSON.stringify(errors)}`,
        debugMessage: '[Person] Error in deletePerson.',
        error: errors,
      })
    );
  }
  return personService.deletePerson({ id, clientId });
};


export default { validateAndGetPersons, validateAndUpdatePerson, validateAndDeletePerson, validateAndGetByIdPerson };

