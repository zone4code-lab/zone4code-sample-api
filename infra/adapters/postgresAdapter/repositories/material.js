/* import * as Models from '../models'; */
import Material from '../schema/material';
/**
 * @function getMaterials
 */
export const getMaterials = async (knex) => {
  try {
    const data = await Material.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function getMaterialById
 */
export const getMaterialById = async ({ id }, knex) => {
  try {
    const data = await Material.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function addMaterial
 */
export const addMaterial = async (body, knex) => {
  try {
    const data = await Material.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function updateMaterial
 */
export const updateMaterial = async ({ id }, body, knex) => {
  try {
    const data = await Material.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function deleteMaterial
 */
export const deleteMaterial = async ({ id }, knex) => {
  try {
    await Material.query(knex).deleteById(id);
    return { result: { status: '200', message: `Material with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { getMaterials, getMaterialById, addMaterial, updateMaterial, deleteMaterial };
