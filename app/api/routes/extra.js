import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/extra',
    handler: Controllers.getExtras,
    schema: Documentation.getExtraSchema,
  },
  {
    method: 'GET',
    url: '/extra/:id',
    handler: Controllers.getExtraById,
    schema: Documentation.getExtraByIdSchema,
  },
  {
    method: 'POST',
    url: '/extra',
    handler: Controllers.addExtra,
    schema: Documentation.addExtraSchema,
  },
  {
    method: 'PUT',
    url: '/extra/:id',
    handler: Controllers.updateExtra,
    schema: Documentation.updateExtraSchema,
  },
  {
    method: 'DELETE',
    url: '/extra/:id',
    handler: Controllers.deleteExtra,
    schema: Documentation.deleteExtraSchema,
  },
];

export default routes;
