import * as validatePerson from '../validations';
import * as personRepository from '../../infra/adapters/postgresAdapter/repositories';
export const getPersons = async (req) => {
  const Person = await personRepository.listPersons(req.knex);
  //console.log('Person :>> ', Person);
  //validatePerson.validateAndGetPersons(req.params);
  return Person;
};

export const getPersonById = async (req) => {
  const singlePerson = await validatePerson.validateAndGetByIdPerson(req.params);
  return singlePerson;
};

export const addPerson = async (req) => {
  const addPerson = await personRepository.addPerson(req.body, req.knex);
  return addPerson;
};

export const updatePerson = async (req) => {
  const editPerson = await validatePerson.validateAndUpdatePerson(req.params, req.body);
  return editPerson;
};

export const deletePerson = async (req) => {
  const deletePerson = await validatePerson.validateAndDeletePerson(req.params);
  return deletePerson;
};

export default { getPersons, getPersonById, addPerson, updatePerson, deletePerson };
