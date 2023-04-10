import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/order_item',
    handler: Controllers.getOrder_items,
    schema: Documentation.getOrder_itemSchema,
  },
  {
    method: 'GET',
    url: '/order_item/:id',
    handler: Controllers.getOrder_itemById,
    schema: Documentation.getOrder_itemByIdSchema,
  },
  {
    method: 'POST',
    url: '/order_item',
    handler: Controllers.addOrder_item,
    schema: Documentation.addOrder_itemSchema,
  },
  {
    method: 'PUT',
    url: '/order_item/:id',
    handler: Controllers.updateOrder_item,
    schema: Documentation.updateOrder_itemSchema,
  },
  {
    method: 'DELETE',
    url: '/order_item/:id',
    handler: Controllers.deleteOrder_item,
    schema: Documentation.deleteOrder_itemSchema,
  },
];

export default routes;
