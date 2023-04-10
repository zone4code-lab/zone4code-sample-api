---
to: domain/validations/<%= name%>.js
---

import validators from '../utils/validators';
import * as <%= name%>Service from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGet<%= h.capitalize(name)%>
 */

export const validateAndGet<%= h.capitalize(name)%>s = async ({ clientId }, knex) => {
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
        name: '<%= h.capitalize(name)%>',
        status: 400,
        code: 'invalid_get_<%= h.capitalize(name)%>',
        message: `Invalid get <%= h.capitalize(name)%> input data ${JSON.stringify(errors)}`,
        debugMessage: '[<%= h.capitalize(name)%>] Error in get<%= h.capitalize(name)%>ById.',
        error: errors,
      })
    );
  }

  const data = await <%= name%>Service.get<%= h.capitalize(name)%>s(knex);
  return data;
};

/**
 * @function validateAndGetById<%= h.capitalize(name)%>
 */

export const validateAndGetById<%= h.capitalize(name)%> = ({ id, clientId }, knex) => {
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
        name: '<%= h.capitalize(name)%>',
        status: 400,
        code: 'invalid_get_<%= h.capitalize(name)%>',
        message: `Invalid get <%= h.capitalize(name)%> input data ${JSON.stringify(errors)}`,
        debugMessage: '[<%= h.capitalize(name)%>] Error in get<%= h.capitalize(name)%>ById.',
        error: errors,
      })
    );
  }
  return <%= name%>Service.get<%= h.capitalize(name)%>ById({ id }, knex);
};

/**
 * @function validateAndAdd<%= h.capitalize(name)%>
 */

export const validateAndAdd<%= h.capitalize(name)%> = ({clientId},body, knex) => {
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
        name: '<%= h.capitalize(name)%>',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create <%= h.capitalize(name)%> input data ${JSON.stringify(errors)}`,
        debugMessage: '[<%= h.capitalize(name)%>] Error in create<%= h.capitalize(name)%>.',
        error: errors,
      })
    );
  }
  return <%= name%>Service.add<%= h.capitalize(name)%>(body, knex);
};

/**
 * @function validateAndUpdate<%= h.capitalize(name)%>
 */

export const validateAndUpdate<%= h.capitalize(name)%> = ({ id, clientId }, body, knex) => {
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
        name: '<%= h.capitalize(name)%>',
        status: 400,
        code: 'invalid_update_<%= h.capitalize(name)%>',
        message: `Invalid update <%= h.capitalize(name)%> input data ${JSON.stringify(errors)}`,
        debugMessage: '[<%= h.capitalize(name)%>] Error in update<%= h.capitalize(name)%>.',
        error: errors,
      })
    );
  }

  return <%= name%>Service.update<%= h.capitalize(name)%>({ id }, body, knex);
};

/**
 * @function validateAndDelete<%= h.capitalize(name)%>
 */

export const validateAndDelete<%= h.capitalize(name)%> = ({ id, clientId }, knex) => {
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
        name: '<%= h.capitalize(name)%>',
        status: 400,
        code: 'invalid_delete_<%= h.capitalize(name)%>',
        message: `Invalid get <%= h.capitalize(name)%> input data ${JSON.stringify(errors)}`,
        debugMessage: '[<%= h.capitalize(name)%>] Error in delete<%= h.capitalize(name)%>.',
        error: errors,
      })
    );
  }
  return <%= name%>Service.delete<%= h.capitalize(name)%>({ id }, knex);
};
export default { validateAndGet<%= h.capitalize(name)%>s, validateAndUpdate<%= h.capitalize(name)%>, validateAndDelete<%= h.capitalize(name)%>, validateAndGetById<%= h.capitalize(name)%> };

