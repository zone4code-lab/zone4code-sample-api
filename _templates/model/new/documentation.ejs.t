---
to: domain/documentation/<%= name%>.js
---

import m2s from 'mongoose-to-swagger';

import * as Models from '../../infra/adapters/mongoAdapter/schema';

/* import { cleanProperties } from '../utils/helpers'; */

export const cleanProperties = (data) => {
  if (data.listId && data.html5InputType && data.fieldCategory && data.type) {
    delete data.listId.required;
    delete data.html5InputType;
    delete data.fieldCategory;
    delete data.type;
    // delete data.description;
  }
  delete data.updatedAt;
  delete data.createdAt;
  // delete data.translate;
  // delete data.parent;
  // delete data._id;
  // console.log('type of description  : ', typeof data.description.type);
  return data;
};

const dynamicProperties = cleanProperties(m2s(Models.<%= h.capitalize(name)%>Model).properties);

export const add<%= h.capitalize(name)%>Schema = {
  description: 'Create a new <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Creates new <%= h.capitalize(name)%> with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
    },
  },
  body: {
    type: 'object',
    properties: dynamicProperties,
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: m2s(Models.<%= h.capitalize(name)%>Model).properties,
    },
  },
};

export const get<%= h.capitalize(name)%>Schema = {
  description: 'Get a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Creates new <%= h.capitalize(name)%> with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
    },
  },
};

export const get<%= h.capitalize(name)%>ByIdSchema = {
  description: 'Get a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Creates new <%= h.capitalize(name)%> with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
      id: {
        type: 'string',
        description: '<%= h.capitalize(name)%> id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: m2s(Models.<%= h.capitalize(name)%>Model).properties,
    },
  },
};

export const update<%= h.capitalize(name)%>Schema = {
  description: 'update a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Update <%= h.capitalize(name)%> with given values',
  body: {
    type: 'object',
    properties: dynamicProperties,
  },
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
      id: {
        type: 'string',
        description: '<%= h.capitalize(name)%> id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: m2s(Models.<%= h.capitalize(name)%>Model).properties,
    },
  },
};

export const delete<%= h.capitalize(name)%>Schema = {
  description: 'delete a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Update <%= h.capitalize(name)%> with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
      id: {
        type: 'string',
        description: '<%= h.capitalize(name)%> id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'boolean',
    },
  },
};

export default { add<%= h.capitalize(name)%>Schema, get<%= h.capitalize(name)%>Schema, get<%= h.capitalize(name)%>ByIdSchema, update<%= h.capitalize(name)%>Schema, delete<%= h.capitalize(name)%>Schema };


