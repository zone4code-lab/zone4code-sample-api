---
to: app/api/routes/<%= name%>.js
---
import * as Controllers from '../../../domain/controllers';
import * as Documentation from '../../../domain/documentation';

const routes = [
  {
    method: 'GET',
    url: '/<%= name%>',
    handler: Controllers.get<%= h.capitalize(name)%>s,
    schema: Documentation.get<%= h.capitalize(name)%>Schema,
  },
  {
    method: 'GET',
    url: '/<%= name%>/:id',
    handler: Controllers.get<%= h.capitalize(name)%>ById,
    schema: Documentation.get<%= h.capitalize(name)%>ByIdSchema,
  },
  {
    method: 'POST',
    url: '/<%= name%>',
    handler: Controllers.add<%= h.capitalize(name)%>,
    schema: Documentation.add<%= h.capitalize(name)%>Schema,
  },
  {
    method: 'PUT',
    url: '/<%= name%>/:id',
    handler: Controllers.update<%= h.capitalize(name)%>,
    schema: Documentation.update<%= h.capitalize(name)%>Schema,
  },
  {
    method: 'DELETE',
    url: '/<%= name%>/:id',
    handler: Controllers.delete<%= h.capitalize(name)%>,
    schema: Documentation.delete<%= h.capitalize(name)%>Schema,
  },
];

export default routes;
