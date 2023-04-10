import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/type',
    handler: Controllers.getTypes,
    schema: Documentation.getTypeSchema,
  },
  {
    method: 'GET',
    url: '/type/:id',
    handler: Controllers.getTypeById,
    schema: Documentation.getTypeByIdSchema,
  },
  {
    method: 'POST',
    url: '/type',
    handler: Controllers.addType,
    schema: Documentation.addTypeSchema,
  },
  {
    method: 'PUT',
    url: '/type/:id',
    handler: Controllers.updateType,
    schema: Documentation.updateTypeSchema,
  },
  {
    method: 'DELETE',
    url: '/type/:id',
    handler: Controllers.deleteType,
    schema: Documentation.deleteTypeSchema,
  },
];

export default routes;
