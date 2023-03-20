---
to: infra/adapters/mongoAdapter/repositories/<%= name%>.js
---

/* import * as Models from '../models'; */
import { ServerError } from '../../../../domain/utils/Errors';

import multiConnection from '../utils/db/useDb';

/**
 * @function get<%= h.capitalize(name)%>s
 */

export const get<%= h.capitalize(name)%>s = async ({ clientId }) => {
  /* const <%= h.capitalize(name)%> = await Models.<%= h.capitalize(name)%>Model.find({}) */
  const [DbModel, cleanModel] = await multiConnection('<%= name%>', clientId);
  const <%= name%> = await DbModel.find()
    .sort({ createdAt: -1 })
    .catch((error) => {
      throw new ServerError({
        name: '<%= h.capitalize(name)%>',
        status: 502,
        code: 'cannot_get_<%= h.capitalize(name)%>',
        message: 'cannot get <%= h.capitalize(name)%> data',
        debugMessage: '[<%= h.capitalize(name)%>] Error in get<%= h.capitalize(name)%>s.',
        error,
      });
    });
  cleanModel();
  return {
    <%= name%>,
  };
};
/**
 * @function get<%= h.capitalize(name)%>ById
 */
export const get<%= h.capitalize(name)%>ById = async ({ id, clientId }) => {
  /*   const <%= h.capitalize(name)%> = await Models.<%= h.capitalize(name)%>Model.findById({ _id: id }) */
  const [DbModel] = await multiConnection('<%= name%>', clientId);
  const <%= name%> = await DbModel.findById({ _id: id }).catch((err) => {
    throw new ServerError({
      name: '<%= h.capitalize(name)%>',
      status: 502,
      code: 'cannot_get_<%= h.capitalize(name)%>_byId',
      message: 'cannot get <%= h.capitalize(name)%> data',
      debugMessage: '[<%= h.capitalize(name)%>] Error in get<%= h.capitalize(name)%>ById.',
      data: {
        details: JSON.stringify(err),
      },
    });
  });
  if (!<%= name%>) {
    throw new ServerError({
      name: '<%= h.capitalize(name)%>',
      status: 404,
      code: 'cannot_get_<%= h.capitalize(name)%>_byId',
      message: `No <%= h.capitalize(name)%> found with the id ${id}`,
      debugMessage: '[<%= h.capitalize(name)%>] Error in get<%= h.capitalize(name)%>ById.',
    });
  }
  return <%= name%>;
};
/**
 * @function add<%= h.capitalize(name)%>
 */
export const add<%= h.capitalize(name)%> = async ({  name, description, clientId }) => {
  /*   const <%= h.capitalize(name)%> = await Models.<%= h.capitalize(name)%>Model. */
  const [DbModel] = await multiConnection('<%= name%>', clientId);
  const <%= name%> = await DbModel.create({ name, description }).catch((err) => {
    throw new ServerError({
      code: 'cannot_create_<%= h.capitalize(name)%>',
      message: '<%= h.capitalize(name)%> was not created',
      debugMessage: '[<%= h.capitalize(name)%>] Error in add<%= h.capitalize(name)%>.',
      error: err,
      data: {
        details: 'create <%= h.capitalize(name)%> service is down',
      },
    });
  });

  return <%= name%>;
};
/**
 * @function update<%= h.capitalize(name)%>
 */
export const update<%= h.capitalize(name)%> = async ({ id, body, clientId }) => {
  /*   const <%= h.capitalize(name)%> = await Models.<%= h.capitalize(name)%>Model */

  const [DbModel] = await multiConnection('<%= name%>', clientId);
  const <%= name%> = await DbModel.findOneAndUpdate({ _id: id }, body, { new: true }).catch((err) => {
    throw new ServerError({
      code: 'cannot_update_<%= h.capitalize(name)%>',
      message: '<%= h.capitalize(name)%> was not updated',
      status: 500,
      debugMessage: '[<%= h.capitalize(name)%>] Error in update<%= h.capitalize(name)%>.',
      error: err,
      data: {
        details: 'update <%= h.capitalize(name)%> service is down',
      },
    });
  });

  return <%= name%>;
};
/**
 * @function delete<%= h.capitalize(name)%>
 */
export const delete<%= h.capitalize(name)%> = async ({ id, clientId }) => {
  /* const <%= h.capitalize(name)%> = await Models.<%= h.capitalize(name)%>Model */
  const [DbModel] = await multiConnection('<%= name%>', clientId);
  const <%= name%> = await DbModel.findOneAndDelete({ _id: id }).catch((err) => {
    throw new ServerError({
      code: 'cannot_delete_<%= h.capitalize(name)%>',
      message: '<%= h.capitalize(name)%> was not deleted',
      status: 500,
      debugMessage: '[<%= h.capitalize(name)%>] Error in delete<%= h.capitalize(name)%>.',
      error: err,
      data: {
        details: 'delete <%= h.capitalize(name)%> service is down',
      },
    });
  });
  return <%= name%>;
};

export default { get<%= h.capitalize(name)%>s, get<%= h.capitalize(name)%>ById, add<%= h.capitalize(name)%>, update<%= h.capitalize(name)%>, delete<%= h.capitalize(name)%> };
