import * as validateReview from '../validations';

export const getReviews = async (req) => {
  const Review = await validateReview.validateAndGetReviews(req.params, req.knex);
  return Review;
};

export const getReviewById = async (req) => {
  const singleReview = await validateReview.validateAndGetByIdReview(req.params, req.knex);
  return singleReview;
};

export const addReview = async (req) => {
  const addReview = await validateReview.validateAndAddReview(req.params, req.body, req.knex);
  return addReview;
};

export const updateReview = async (req) => {
  const editReview = await validateReview.validateAndUpdateReview(req.params, req.body, req.knex);
  return editReview;
};

export const deleteReview = async (req) => {
  const deleteReview = await validateReview.validateAndDeleteReview(req.params, req.knex);
  return deleteReview;
};

export default { getReviews, getReviewById, addReview, updateReview, deleteReview };