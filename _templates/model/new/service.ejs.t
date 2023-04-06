---
to: domain/services/<%= name%>.js
---

import * as <%= name%>Repository from '../../infra/adapters/postgresAdapter/repositories';

/**
 * @function get<%= h.capitalize(name)%>s
 */

export const get<%= h.capitalize(name)%>s = async (knex) => {
  const response = await <%= name%>Repository.get<%= h.capitalize(name)%>s(knex);
  return response;
};
/**
 * @function get<%= h.capitalize(name)%>ById
 */
export const get<%= h.capitalize(name)%>ById = async ({ id }, knex) => {
  const response = await <%= name%>Repository.get<%= h.capitalize(name)%>ById({ id }, knex);

  return response;
};
/**
 * @function add<%= h.capitalize(name)%>
 */
export const add<%= h.capitalize(name)%> = async (body, knex) => {
  const response = await <%= name%>Repository.add<%= h.capitalize(name)%>(body, knex);

  return response;
};
/**
 * @function update<%= h.capitalize(name)%>
 */
export const update<%= h.capitalize(name)%> = async ({ id }, body, knex) => {
  const response = await <%= name%>Repository.update<%= h.capitalize(name)%>({ id }, body, knex);

  return response;
};
/**
 * @function delete<%= h.capitalize(name)%>
 */
export const delete<%= h.capitalize(name)%> = async ({ id }, knex) => {
  const response = await <%= name%>Repository.delete<%= h.capitalize(name)%>({ id }, knex);

  return response;
};

export default { get<%= h.capitalize(name)%>s, get<%= h.capitalize(name)%>ById, add<%= h.capitalize(name)%>, update<%= h.capitalize(name)%>, delete<%= h.capitalize(name)%> };
