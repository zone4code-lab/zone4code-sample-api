import * as validatePrice from '../validations';

export const getPrices = async (req) => {
  const Price = await validatePrice.validateAndGetPrices(req.params, req.knex);
  return Price;
};

export const getPriceById = async (req) => {
  const singlePrice = await validatePrice.validateAndGetByIdPrice(req.params, req.knex);
  return singlePrice;
};

export const addPrice = async (req) => {
  const addPrice = await validatePrice.validateAndAddPrice(req.params, req.body, req.knex);
  return addPrice;
};

export const updatePrice = async (req) => {
  const editPrice = await validatePrice.validateAndUpdatePrice(req.params, req.body, req.knex);
  return editPrice;
};

export const deletePrice = async (req) => {
  const deletePrice = await validatePrice.validateAndDeletePrice(req.params, req.knex);
  return deletePrice;
};

export default { getPrices, getPriceById, addPrice, updatePrice, deletePrice };