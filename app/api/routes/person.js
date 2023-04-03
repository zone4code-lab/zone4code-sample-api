import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/person',
    handler: Controllers.getPersons,
    // schema: Documentation.getPersonSchema,
  },
  {
    method: 'GET',
    url: '/person/:id',
    handler: Controllers.getPersonById,
    //  schema: Documentation.getPersonByIdSchema,
  },
  {
    method: 'POST',
    url: '/person',
    handler: Controllers.addPerson,
    //  schema: Documentation.addPersonSchema,
  },
  {
    method: 'PUT',
    url: '/person/:id',
    handler: Controllers.updatePerson,
    //  schema: Documentation.updatePersonSchema,
  },
  {
    method: 'DELETE',
    url: '/person/:id',
    handler: Controllers.deletePerson,
    //   schema: Documentation.deletePersonSchema,
  },
];

export default routes;
