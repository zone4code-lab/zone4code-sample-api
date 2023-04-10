import * as validateType from '../validations';

export const getTypes = async (req) => {
  const Type = await validateType.validateAndGetTypes(req.params, req.knex);
  return Type;
};

export const getTypeById = async (req) => {
  const singleType = await validateType.validateAndGetByIdType(req.params, req.knex);
  return singleType;
};

export const addType = async (req) => {
  const addType = await validateType.validateAndAddType(req.params, req.body, req.knex);
  return addType;
};

export const updateType = async (req) => {
  const editType = await validateType.validateAndUpdateType(req.params, req.body, req.knex);
  return editType;
};

export const deleteType = async (req) => {
  const deleteType = await validateType.validateAndDeleteType(req.params, req.knex);
  return deleteType;
};

export default { getTypes, getTypeById, addType, updateType, deleteType };