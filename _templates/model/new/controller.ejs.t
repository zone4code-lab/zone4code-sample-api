---
to: domain/controllers/<%= name%>.js
---

import * as validate<%= h.capitalize(name)%> from '../validations';

export const get<%= h.capitalize(name)%>s = async (req) => {
  const <%= h.capitalize(name)%> = await validate<%= h.capitalize(name)%>.validateAndGet<%= h.capitalize(name)%>s(req.params);
  return <%= h.capitalize(name)%>;
};

export const get<%= h.capitalize(name)%>ById = async (req) => {
  const single<%= h.capitalize(name)%> = await validate<%= h.capitalize(name)%>.validateAndGetById<%= h.capitalize(name)%>(req.params);
  return single<%= h.capitalize(name)%>;
};

export const add<%= h.capitalize(name)%> = async (req) => {
  const add<%= h.capitalize(name)%> = await validate<%= h.capitalize(name)%>.validateAndAdd<%= h.capitalize(name)%>({ ...req.body, ...req.params });
  return add<%= h.capitalize(name)%>;
};

export const update<%= h.capitalize(name)%> = async (req) => {
  const edit<%= h.capitalize(name)%> = await validate<%= h.capitalize(name)%>.validateAndUpdate<%= h.capitalize(name)%>(req.params, req.body);
  return edit<%= h.capitalize(name)%>;
};

export const delete<%= h.capitalize(name)%> = async (req) => {
  const delete<%= h.capitalize(name)%> = await validate<%= h.capitalize(name)%>.validateAndDelete<%= h.capitalize(name)%>(req.params);
  return delete<%= h.capitalize(name)%>;
};

export default { get<%= h.capitalize(name)%>s, get<%= h.capitalize(name)%>ById, add<%= h.capitalize(name)%>, update<%= h.capitalize(name)%>, delete<%= h.capitalize(name)%> };