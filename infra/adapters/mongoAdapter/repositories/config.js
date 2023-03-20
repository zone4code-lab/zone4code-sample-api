/* import * as Models from '../models'; */
import { ServerError } from '../../../../domain/utils/Errors';

import multiConnection from '../utils/db/useDb';

/**
 * @function getConfigs
 */

export const getConfigs = async ({ clientId }) => {
  /* const config = await Models.ConfigModel.find({}) */
  const [DbModel, cleanModel] = await multiConnection('config', clientId);
  const [config] = await DbModel.find()
    .sort({ createdAt: -1 })
    .catch((error) => {
      throw new ServerError({
        name: 'Config',
        status: 502,
        code: 'cannot_get_Config',
        message: 'cannot get Config data',
        debugMessage: '[Config] Error in getConfigs.',
        error,
      });
    });
  cleanModel();
  return {
    config,
  };
};
/**
 * @function getConfigById
 */
export const getConfigById = async ({ id, clientId }) => {
  /*   const config = await Models.ConfigModel.findById({ _id: id }) */
  const [DbModel] = await multiConnection('config', clientId);
  const config = await DbModel.findById({ _id: id }).catch((err) => {
    throw new ServerError({
      name: 'Config',
      status: 502,
      code: 'cannot_get_Config_byId',
      message: 'cannot get Config data',
      debugMessage: '[Config] Error in getConfigById.',
      data: {
        details: JSON.stringify(err),
      },
    });
  });
  if (!config) {
    throw new ServerError({
      name: 'Config',
      status: 404,
      code: 'cannot_get_Config_byId',
      message: `No Config found with the id ${id}`,
      debugMessage: '[Config] Error in getConfigById.',
    });
  }
  return config;
};
/**
 * @function addConfig
 */
export const addConfig = async ({ extension, size, clientId }) => {
  /*   const config = await Models.ConfigModel. */
  const [DbModel] = await multiConnection('config', clientId);
  const config = await DbModel.create({ extension, size }).catch((err) => {
    throw new ServerError({
      code: 'cannot_create_Config',
      message: 'Config was not created',
      debugMessage: '[Config] Error in addConfig.',
      error: err,
      data: {
        details: 'create Config service is down',
      },
    });
  });

  return config;
};
/**
 * @function updateConfig
 */
export const updateConfig = async ({ id, body, cliendId }) => {
  /*   const config = await Models.ConfigModel */

  const [DbModel] = await multiConnection('config', cliendId);
  const config = await DbModel.findOneAndUpdate({ _id: id }, body, { new: true }).catch((err) => {
    throw new ServerError({
      code: 'cannot_update_Config',
      message: 'Config was not updated',
      status: 500,
      debugMessage: '[Config] Error in updateConfig.',
      error: err,
      data: {
        details: 'update Config service is down',
      },
    });
  });

  return config;
};
/**
 * @function deleteConfig
 */
export const deleteConfig = async ({ id, cliendId }) => {
  /* const config = await Models.ConfigModel */
  const [DbModel] = await multiConnection('config', cliendId);
  const config = await DbModel.findOneAndDelete({ _id: id }).catch((err) => {
    throw new ServerError({
      code: 'cannot_delete_Config',
      message: 'Config was not deleted',
      status: 500,
      debugMessage: '[Config] Error in deleteConfig.',
      error: err,
      data: {
        details: 'delete Config service is down',
      },
    });
  });
  return config;
};

export default { getConfigs, getConfigById, addConfig, updateConfig, deleteConfig };
