import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/order',
    handler: Controllers.getOrders,
    schema: Documentation.getOrderSchema,
  },
  {
    method: 'GET',
    url: '/order/:id',
    handler: Controllers.getOrderById,
    schema: Documentation.getOrderByIdSchema,
  },
  {
    method: 'POST',
    url: '/order',
    handler: Controllers.addOrder,
    schema: Documentation.addOrderSchema,
  },
  {
    method: 'PUT',
    url: '/order/:id',
    handler: Controllers.updateOrder,
    schema: Documentation.updateOrderSchema,
  },
  {
    method: 'DELETE',
    url: '/order/:id',
    handler: Controllers.deleteOrder,
    schema: Documentation.deleteOrderSchema,
  },
];

export default routes;
