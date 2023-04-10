import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/size',
    handler: Controllers.getSizes,
    schema: Documentation.getSizeSchema,
  },
  {
    method: 'GET',
    url: '/size/:id',
    handler: Controllers.getSizeById,
    schema: Documentation.getSizeByIdSchema,
  },
  {
    method: 'POST',
    url: '/size',
    handler: Controllers.addSize,
    schema: Documentation.addSizeSchema,
  },
  {
    method: 'PUT',
    url: '/size/:id',
    handler: Controllers.updateSize,
    schema: Documentation.updateSizeSchema,
  },
  {
    method: 'DELETE',
    url: '/size/:id',
    handler: Controllers.deleteSize,
    schema: Documentation.deleteSizeSchema,
  },
];

export default routes;
