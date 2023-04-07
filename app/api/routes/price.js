import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/price',
    handler: Controllers.getPrices,
    schema: Documentation.getPriceSchema,
  },
  {
    method: 'GET',
    url: '/price/:id',
    handler: Controllers.getPriceById,
    schema: Documentation.getPriceByIdSchema,
  },
  {
    method: 'POST',
    url: '/price',
    handler: Controllers.addPrice,
    schema: Documentation.addPriceSchema,
  },
  {
    method: 'PUT',
    url: '/price/:id',
    handler: Controllers.updatePrice,
    schema: Documentation.updatePriceSchema,
  },
  {
    method: 'DELETE',
    url: '/price/:id',
    handler: Controllers.deletePrice,
    schema: Documentation.deletePriceSchema,
  },
];

export default routes;
