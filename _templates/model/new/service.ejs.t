---
to: domain/services/<%= name%>.js
---

import * as <%= name%>Repository from '../../infra/adapters/mongoAdapter/repositories';

/**
 * @function get<%= h.capitalize(name)%>s
 */

export const get<%= h.capitalize(name)%>s = async ({ clientId }) => {
  const response = await <%= name%>Repository.get<%= h.capitalize(name)%>s({ clientId });

  return response;
};
/**
 * @function get<%= h.capitalize(name)%>ById
 */
export const get<%= h.capitalize(name)%>ById = async ({ id, clientId }) => {
  const response = await <%= name%>Repository.get<%= h.capitalize(name)%>ById({ id, clientId });

  return response;
};
/**
 * @function add<%= h.capitalize(name)%>
 */
export const add<%= h.capitalize(name)%> = async ({ name, description, clientId }) => {
  const response = await <%= name%>Repository.add<%= h.capitalize(name)%>({ name, description, clientId });

  return response;
};
/**
 * @function update<%= h.capitalize(name)%>
 */
export const update<%= h.capitalize(name)%> = async ({ id, body, clientId }) => {
  const response = await <%= name%>Repository.update<%= h.capitalize(name)%>({ id, body, clientId });

  return response;
};
/**
 * @function delete<%= h.capitalize(name)%>
 */
export const delete<%= h.capitalize(name)%> = async ({ id, clientId }) => {
  const response = await <%= name%>Repository.delete<%= h.capitalize(name)%>({ id, clientId });

  return response;
};

export default { get<%= h.capitalize(name)%>s, get<%= h.capitalize(name)%>ById, add<%= h.capitalize(name)%>, update<%= h.capitalize(name)%>, delete<%= h.capitalize(name)%> };
