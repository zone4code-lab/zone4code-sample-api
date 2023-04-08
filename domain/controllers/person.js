import * as validatePerson from '../validations';

export const getPersons = async (req) => {
  const Person = await validatePerson.validateAndGetPersons(req.params, req.knex);
  return Person;
};

export const getPersonById = async (req) => {
  const singlePerson = await validatePerson.validateAndGetByIdPerson(req.params, req.knex);
  return singlePerson;
};

export const addPerson = async (req) => {
  const addPerson = await validatePerson.validateAndAddPerson(req.params, req.body, req.knex);
  return addPerson;
};

export const updatePerson = async (req) => {
  const editPerson = await validatePerson.validateAndUpdatePerson(req.params, req.body, req.knex);
  return editPerson;
};

export const deletePerson = async (req) => {
  const deletePerson = await validatePerson.validateAndDeletePerson(req.params, req.knex);
  return deletePerson;
};

export default { getPersons, getPersonById, addPerson, updatePerson, deletePerson };