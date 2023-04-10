import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/color',
    handler: Controllers.getColors,
    schema: Documentation.getColorSchema,
  },
  {
    method: 'GET',
    url: '/color/:id',
    handler: Controllers.getColorById,
    schema: Documentation.getColorByIdSchema,
  },
  {
    method: 'POST',
    url: '/color',
    handler: Controllers.addColor,
    schema: Documentation.addColorSchema,
  },
  {
    method: 'PUT',
    url: '/color/:id',
    handler: Controllers.updateColor,
    schema: Documentation.updateColorSchema,
  },
  {
    method: 'DELETE',
    url: '/color/:id',
    handler: Controllers.deleteColor,
    schema: Documentation.deleteColorSchema,
  },
];

export default routes;
