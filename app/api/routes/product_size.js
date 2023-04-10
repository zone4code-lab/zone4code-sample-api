import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/product_size',
    handler: Controllers.getProduct_sizes,
    schema: Documentation.getProduct_sizeSchema,
  },
  {
    method: 'GET',
    url: '/product_size/:id',
    handler: Controllers.getProduct_sizeById,
    schema: Documentation.getProduct_sizeByIdSchema,
  },
  {
    method: 'POST',
    url: '/product_size',
    handler: Controllers.addProduct_size,
    schema: Documentation.addProduct_sizeSchema,
  },
  {
    method: 'PUT',
    url: '/product_size/:id',
    handler: Controllers.updateProduct_size,
    schema: Documentation.updateProduct_sizeSchema,
  },
  {
    method: 'DELETE',
    url: '/product_size/:id',
    handler: Controllers.deleteProduct_size,
    schema: Documentation.deleteProduct_sizeSchema,
  },
];

export default routes;
