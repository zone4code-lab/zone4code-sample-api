---
to: infra/adapters/postgresAdapter/repositories/<%= name%>.js
---

/* import * as Models from '../models'; */
import <%= h.capitalize(name)%> from '../schema/<%=name%>';
/**
 * @function get<%= h.capitalize(name)%>s
 */
export const get<%= h.capitalize(name)%>s = async ({ knex }) => {
  try {
    const data = await <%= h.capitalize(name)%>.query(knex).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function get<%= h.capitalize(name)%>ById
 */
export const get<%= h.capitalize(name)%>ById = async ({ id }, knex) => {
  try {
    const data = await <%= h.capitalize(name)%>.query(knex).findById(id).throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function add<%= h.capitalize(name)%>
 */
export const add<%= h.capitalize(name)%> = async (body, knex) => {
  try {
    const data = await <%= h.capitalize(name)%>.query(knex).insertGraph(body);
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function update<%= h.capitalize(name)%>
 */
export const update<%= h.capitalize(name)%> = async ({ id }, body, knex) => {
  try {
    const data = await <%= h.capitalize(name)%>.query(knex).patch(body).where({ id }).returning('*').throwIfNotFound();
    return { result: { status: '200', data: data } };
  } catch (err) {
    return { error: err };
  }
};
/**
 * @function delete<%= h.capitalize(name)%>
 */
export const delete<%= h.capitalize(name)%> = async ({ id }, knex) => {
  try {
    await <%= h.capitalize(name)%>.query(knex).deleteById(id);
    return { result: { status: '200', message: `<%= h.capitalize(name)%> with the id ${id} deleted successfully` } };
  } catch (err) {
    return { error: err };
  }
};

export default { get<%= h.capitalize(name)%>s, get<%= h.capitalize(name)%>ById, add<%= h.capitalize(name)%>, update<%= h.capitalize(name)%>, delete<%= h.capitalize(name)%> };
