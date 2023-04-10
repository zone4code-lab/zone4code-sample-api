import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/category',
    handler: Controllers.getCategorys,
    schema: Documentation.getCategorySchema,
  },
  {
    method: 'GET',
    url: '/category/:id',
    handler: Controllers.getCategoryById,
    schema: Documentation.getCategoryByIdSchema,
  },
  {
    method: 'POST',
    url: '/category',
    handler: Controllers.addCategory,
    schema: Documentation.addCategorySchema,
  },
  {
    method: 'PUT',
    url: '/category/:id',
    handler: Controllers.updateCategory,
    schema: Documentation.updateCategorySchema,
  },
  {
    method: 'DELETE',
    url: '/category/:id',
    handler: Controllers.deleteCategory,
    schema: Documentation.deleteCategorySchema,
  },
];

export default routes;
