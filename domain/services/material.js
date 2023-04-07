import * as materialRepository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function getMaterials
 */

export const getMaterials = async (knex) => {
  const response = await materialRepository.getMaterials(knex);
  return response;
};
/**
 * @function getMaterialById
 */
export const getMaterialById = async ({ id }, knex) => {
  const response = await materialRepository.getMaterialById({ id }, knex);

  return response;
};
/**
 * @function addMaterial
 */
export const addMaterial = async (body, knex) => {
  const response = await materialRepository.addMaterial(body, knex);

  return response;
};
/**
 * @function updateMaterial
 */
export const updateMaterial = async ({ id }, body, knex) => {
  const response = await materialRepository.updateMaterial({ id }, body, knex);

  return response;
};
/**
 * @function deleteMaterial
 */
export const deleteMaterial = async ({ id }, knex) => {
  const response = await materialRepository.deleteMaterial({ id }, knex);

  return response;
};

export default { getMaterials, getMaterialById, addMaterial, updateMaterial, deleteMaterial };
