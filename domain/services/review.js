import * as reviewRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getReviews
 */

export const getReviews = async (knex) => {
  const response = await reviewRepository.getReviews(knex);
  return response;
};
/**
 * @function getReviewById
 */
export const getReviewById = async ({ id }, knex) => {
  const response = await reviewRepository.getReviewById({ id }, knex);

  return response;
};
/**
 * @function addReview
 */
export const addReview = async (body, knex) => {
  const response = await reviewRepository.addReview(body, knex);

  return response;
};
/**
 * @function updateReview
 */
export const updateReview = async ({ id }, body, knex) => {
  const response = await reviewRepository.updateReview({ id }, body, knex);

  return response;
};
/**
 * @function deleteReview
 */
export const deleteReview = async ({ id }, knex) => {
  const response = await reviewRepository.deleteReview({ id }, knex);

  return response;
};

export default { getReviews, getReviewById, addReview, updateReview, deleteReview };
