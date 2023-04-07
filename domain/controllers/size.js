import * as validateSize from '../validations';

export const getSizes = async (req) => {
  const Size = await validateSize.validateAndGetSizes(req.params, req.knex);
  return Size;
};

export const getSizeById = async (req) => {
  const singleSize = await validateSize.validateAndGetByIdSize(req.params, req.knex);
  return singleSize;
};

export const addSize = async (req) => {
  const addSize = await validateSize.validateAndAddSize(req.params, req.body, req.knex);
  return addSize;
};

export const updateSize = async (req) => {
  const editSize = await validateSize.validateAndUpdateSize(req.params, req.body, req.knex);
  return editSize;
};

export const deleteSize = async (req) => {
  const deleteSize = await validateSize.validateAndDeleteSize(req.params, req.knex);
  return deleteSize;
};

export default { getSizes, getSizeById, addSize, updateSize, deleteSize };