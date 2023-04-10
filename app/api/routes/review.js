import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/review',
    handler: Controllers.getReviews,
    schema: Documentation.getReviewSchema,
  },
  {
    method: 'GET',
    url: '/review/:id',
    handler: Controllers.getReviewById,
    schema: Documentation.getReviewByIdSchema,
  },
  {
    method: 'POST',
    url: '/review',
    handler: Controllers.addReview,
    schema: Documentation.addReviewSchema,
  },
  {
    method: 'PUT',
    url: '/review/:id',
    handler: Controllers.updateReview,
    schema: Documentation.updateReviewSchema,
  },
  {
    method: 'DELETE',
    url: '/review/:id',
    handler: Controllers.deleteReview,
    schema: Documentation.deleteReviewSchema,
  },
];

export default routes;
