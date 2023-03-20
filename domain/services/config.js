import * as configRepository from '../../infra/adapters/mongoAdapter/repositories';

/**
 * @function getConfigs
 */

export const getConfigs = async ({ clientId }) => {
  const response = await configRepository.getConfigs({ clientId });

  return response;
};
/**
 * @function getConfigById
 */
export const getConfigById = async ({ id, clientId }) => {
  const response = await configRepository.getConfigById({ id, clientId });

  return response;
};
/**
 * @function addConfig
 */
export const addConfig = async ({ extension, size, clientId }) => {
  const response = await configRepository.addConfig({ extension, size, clientId });

  return response;
};
/**
 * @function updateConfig
 */
export const updateConfig = async ({ id, body, cliendId }) => {
  const response = await configRepository.updateConfig({ id, body, cliendId });

  return response;
};
/**
 * @function deleteConfig
 */
export const deleteConfig = async ({ id, cliendId }) => {
  const response = await configRepository.updateConfig({ id, cliendId });

  return response;
};

export default { getConfigs, getConfigById, addConfig, updateConfig, deleteConfig };
