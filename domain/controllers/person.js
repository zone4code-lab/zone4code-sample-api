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
  try {
    const addPerson = await validatePerson.validateAndAddPerson(req.body, req.knex);
    return addPerson;
  } catch (error) {
    // Handle the error here
    throw new Error(`Error in addPerson: ${error.message}`);
  }
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
