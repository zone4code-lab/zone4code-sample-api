/* import * as Models from '../models'; */
import Review from '../schema/review';
/**
 * @function getReviews
 */
export const getReviews = async (knex) => {
  try {
    const data = await Review.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getReviewById
 */
export const getReviewById = async ({ id }, knex) => {
  try {
    const data = await Review.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addReview
 */
export const addReview = async (body, knex) => {
  try {
    const data = await Review.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateReview
 */
export const updateReview = async ({ id }, body, knex) => {
  try {
    const data = await Review.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteReview
 */
export const deleteReview = async ({ id }, knex) => {
  try {
    await Review.query(knex).deleteById(id);
    return { result: { status: '200', message: `Review with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getReviews, getReviewById, addReview, updateReview, deleteReview };
