import * as validateColor from '../validations';

export const getColors = async (req) => {
  const Color = await validateColor.validateAndGetColors(req.params, req.knex);
  return Color;
};

export const getColorById = async (req) => {
  const singleColor = await validateColor.validateAndGetByIdColor(req.params, req.knex);
  return singleColor;
};

export const addColor = async (req) => {
  const addColor = await validateColor.validateAndAddColor(req.params, req.body, req.knex);
  return addColor;
};

export const updateColor = async (req) => {
  const editColor = await validateColor.validateAndUpdateColor(req.params, req.body, req.knex);
  return editColor;
};

export const deleteColor = async (req) => {
  const deleteColor = await validateColor.validateAndDeleteColor(req.params, req.knex);
  return deleteColor;
};

export default { getColors, getColorById, addColor, updateColor, deleteColor };