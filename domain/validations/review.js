import validators from '../utils/validators';
import * as reviewService from '../services';

import { ValidationError } from '../utils/Errors';

/**
 * @function validateAndGetReview
 */

export const validateAndGetReviews = async ({ clientId }, knex) => {
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
        name: 'Review',
        status: 400,
        code: 'invalid_get_Review',
        message: `Invalid get Review input data ${JSON.stringify(errors)}`,
        debugMessage: '[Review] Error in getReviewById.',
        error: errors,
      })
    );
  }

  const data = await reviewService.getReviews(knex);
  return data;
};

/**
 * @function validateAndGetByIdReview
 */

export const validateAndGetByIdReview = ({ id, clientId }, knex) => {
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
        name: 'Review',
        status: 400,
        code: 'invalid_get_Review',
        message: `Invalid get Review input data ${JSON.stringify(errors)}`,
        debugMessage: '[Review] Error in getReviewById.',
        error: errors,
      })
    );
  }
  return reviewService.getReviewById({ id }, knex);
};

/**
 * @function validateAndAddReview
 */

export const validateAndAddReview = ({clientId},body, knex) => {
  const errors = {};
  let errorMessage = validators.isPositiveInteger(body.type_id, {
    required: true,
    min: 1,
  });

  if (errorMessage !== null) {
    errors.type_id = errorMessage;
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
        name: 'Review',
        status: 400,
        code: 'invalid_create_',
        message: `Invalid create Review input data ${JSON.stringify(errors)}`,
        debugMessage: '[Review] Error in createReview.',
        error: errors,
      })
    );
  }
  return reviewService.addReview(body, knex);
};

/**
 * @function validateAndUpdateReview
 */

export const validateAndUpdateReview = ({ id, clientId }, body, knex) => {
  const errors = {};

   let errorMessage = validators.isString(id, {
    required: true,
  });

  if (errorMessage !== null) {
    errors.id = errorMessage;
  }

  if (body.name) {
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
        name: 'Review',
        status: 400,
        code: 'invalid_update_Review',
        message: `Invalid update Review input data ${JSON.stringify(errors)}`,
        debugMessage: '[Review] Error in updateReview.',
        error: errors,
      })
    );
  }

  return reviewService.updateReview({ id }, body, knex);
};

/**
 * @function validateAndDeleteReview
 */

export const validateAndDeleteReview = ({ id, clientId }, knex) => {
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
        name: 'Review',
        status: 400,
        code: 'invalid_delete_Review',
        message: `Invalid get Review input data ${JSON.stringify(errors)}`,
        debugMessage: '[Review] Error in deleteReview.',
        error: errors,
      })
    );
  }
  return reviewService.deleteReview({ id }, knex);
};
export default { validateAndGetReviews, validateAndUpdateReview, validateAndDeleteReview, validateAndGetByIdReview };

