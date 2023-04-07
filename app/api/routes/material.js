import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/material',
    handler: Controllers.getMaterials,
    schema: Documentation.getMaterialSchema,
  },
  {
    method: 'GET',
    url: '/material/:id',
    handler: Controllers.getMaterialById,
    schema: Documentation.getMaterialByIdSchema,
  },
  {
    method: 'POST',
    url: '/material',
    handler: Controllers.addMaterial,
    schema: Documentation.addMaterialSchema,
  },
  {
    method: 'PUT',
    url: '/material/:id',
    handler: Controllers.updateMaterial,
    schema: Documentation.updateMaterialSchema,
  },
  {
    method: 'DELETE',
    url: '/material/:id',
    handler: Controllers.deleteMaterial,
    schema: Documentation.deleteMaterialSchema,
  },
];

export default routes;
