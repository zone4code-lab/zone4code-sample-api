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

const dynamicProperties = cleanProperties(m2s(Models.ConfigModel).properties);

export const addConfigSchema = {
  description: 'Create a new Config',
  tags: ['Config'],
  summary: 'Creates new Config with given values',
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
      properties: m2s(Models.ConfigModel).properties,
    },
  },
};

export const getConfigSchema = {
  description: 'Get a Config',
  tags: ['Config'],
  summary: 'Creates new Config with given values',
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

export const getConfigByIdSchema = {
  description: 'Get a Config',
  tags: ['Config'],
  summary: 'Creates new Config with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
      id: {
        type: 'string',
        description: 'Config id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: m2s(Models.ConfigModel).properties,
    },
  },
};

export const updateConfigSchema = {
  description: 'update a Config',
  tags: ['Config'],
  summary: 'Update Config with given values',
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
        description: 'Config id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: m2s(Models.ConfigModel).properties,
    },
  },
};

export const deleteConfigSchema = {
  description: 'delete a Config',
  tags: ['Config'],
  summary: 'Update Config with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'clientId',
      },
      id: {
        type: 'string',
        description: 'Config id',
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

export default { addConfigSchema, getConfigSchema, getConfigByIdSchema, updateConfigSchema, deleteConfigSchema };
