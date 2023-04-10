import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/product_extra',
    handler: Controllers.getProduct_extras,
    schema: Documentation.getProduct_extraSchema,
  },
  {
    method: 'GET',
    url: '/product_extra/:id',
    handler: Controllers.getProduct_extraById,
    schema: Documentation.getProduct_extraByIdSchema,
  },
  {
    method: 'POST',
    url: '/product_extra',
    handler: Controllers.addProduct_extra,
    schema: Documentation.addProduct_extraSchema,
  },
  {
    method: 'PUT',
    url: '/product_extra/:id',
    handler: Controllers.updateProduct_extra,
    schema: Documentation.updateProduct_extraSchema,
  },
  {
    method: 'DELETE',
    url: '/product_extra/:id',
    handler: Controllers.deleteProduct_extra,
    schema: Documentation.deleteProduct_extraSchema,
  },
];

export default routes;
