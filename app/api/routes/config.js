import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/config',
    handler: Controllers.getConfigs,
    schema: Documentation.getConfigSchema,
  },
  {
    method: 'GET',
    url: '/config/:id',
    handler: Controllers.getConfigById,
    schema: Documentation.getConfigByIdSchema,
  },
  {
    method: 'POST',
    url: '/config',
    handler: Controllers.addConfig,
    schema: Documentation.addConfigSchema,
  },
  {
    method: 'PUT',
    url: '/config/:id',
    handler: Controllers.updateConfig,
    schema: Documentation.updateConfigSchema,
  },
  {
    method: 'DELETE',
    url: '/config/:id',
    handler: Controllers.deleteConfig,
    schema: Documentation.deleteConfigSchema,
  },
];

export default routes;
