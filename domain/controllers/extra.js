import * as validateExtra from '../validations';

export const getExtras = async (req) => {
  const Extra = await validateExtra.validateAndGetExtras(req.params, req.knex);
  return Extra;
};

export const getExtraById = async (req) => {
  const singleExtra = await validateExtra.validateAndGetByIdExtra(req.params, req.knex);
  return singleExtra;
};

export const addExtra = async (req) => {
  const addExtra = await validateExtra.validateAndAddExtra(req.params, req.body, req.knex);
  return addExtra;
};

export const updateExtra = async (req) => {
  const editExtra = await validateExtra.validateAndUpdateExtra(req.params, req.body, req.knex);
  return editExtra;
};

export const deleteExtra = async (req) => {
  const deleteExtra = await validateExtra.validateAndDeleteExtra(req.params, req.knex);
  return deleteExtra;
};

export default { getExtras, getExtraById, addExtra, updateExtra, deleteExtra };