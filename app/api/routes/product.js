import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/product',
    handler: Controllers.getProducts,
    schema: Documentation.getProductSchema,
  },
  {
    method: 'GET',
    url: '/product/:id',
    handler: Controllers.getProductById,
    schema: Documentation.getProductByIdSchema,
  },
  {
    method: 'POST',
    url: '/product',
    handler: Controllers.addProduct,
    schema: Documentation.addProductSchema,
  },
  {
    method: 'PUT',
    url: '/product/:id',
    handler: Controllers.updateProduct,
    schema: Documentation.updateProductSchema,
  },
  {
    method: 'DELETE',
    url: '/product/:id',
    handler: Controllers.deleteProduct,
    schema: Documentation.deleteProductSchema,
  },
];

export default routes;
