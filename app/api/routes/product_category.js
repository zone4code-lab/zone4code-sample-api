import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/product_category',
    handler: Controllers.getProduct_categorys,
    schema: Documentation.getProduct_categorySchema,
  },
  {
    method: 'GET',
    url: '/product_category/:id',
    handler: Controllers.getProduct_categoryById,
    schema: Documentation.getProduct_categoryByIdSchema,
  },
  {
    method: 'POST',
    url: '/product_category',
    handler: Controllers.addProduct_category,
    schema: Documentation.addProduct_categorySchema,
  },
  {
    method: 'PUT',
    url: '/product_category/:id',
    handler: Controllers.updateProduct_category,
    schema: Documentation.updateProduct_categorySchema,
  },
  {
    method: 'DELETE',
    url: '/product_category/:id',
    handler: Controllers.deleteProduct_category,
    schema: Documentation.deleteProduct_categorySchema,
  },
];

export default routes;
