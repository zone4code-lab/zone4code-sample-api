import * as validateConfig from '../validations';

export const getConfigs = async (req) => {
  const Config = await validateConfig.validateAndGetConfigs(req.params);
  return Config;
};

export const getConfigById = async (req) => {
  const singleConfig = await validateConfig.validateAndGetByIdConfig(req.params);
  return singleConfig;
};

export const addConfig = async (req) => {
  const addConfig = await validateConfig.validateAndAddConfig({ ...req.body, ...req.params });
  return addConfig;
};

export const updateConfig = async (req) => {
  const editConfig = await validateConfig.validateAndUpdateConfig(req.params, req.body);
  return editConfig;
};

export const deleteConfig = async (req) => {
  const deleteConfig = await validateConfig.validateAndDeleteConfig(req.params);
  return deleteConfig;
};

export default { getConfigs, getConfigById, addConfig, updateConfig, deleteConfig };
