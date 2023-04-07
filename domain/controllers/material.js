import * as validateMaterial from '../validations';

export const getMaterials = async (req) => {
  const Material = await validateMaterial.validateAndGetMaterials(req.params, req.knex);
  return Material;
};

export const getMaterialById = async (req) => {
  const singleMaterial = await validateMaterial.validateAndGetByIdMaterial(req.params, req.knex);
  return singleMaterial;
};

export const addMaterial = async (req) => {
  const addMaterial = await validateMaterial.validateAndAddMaterial(req.params, req.body, req.knex);
  return addMaterial;
};

export const updateMaterial = async (req) => {
  const editMaterial = await validateMaterial.validateAndUpdateMaterial(req.params, req.body, req.knex);
  return editMaterial;
};

export const deleteMaterial = async (req) => {
  const deleteMaterial = await validateMaterial.validateAndDeleteMaterial(req.params, req.knex);
  return deleteMaterial;
};

export default { getMaterials, getMaterialById, addMaterial, updateMaterial, deleteMaterial };