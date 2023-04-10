export const addMaterialSchema = {
  description: 'Create a new Material',
  tags: ['Material'],
  summary: 'Creates new Material with given values',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'Name of the client',
        example: 'novencia',
      },
    },
  },
  body: {
    type: 'object',
     properties:{
      type_id: {
        type: 'integer',
        description: 'type_id of the material to add',
        example: 2,
      },
      composition: {
        type: 'string',
        description: 'composition of the material to add',
        example: ' 20 % coton',
      },
    }, 
  },
  responses: {
    200: {
      description: 'Successful response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'HTTP status code',
          },
          data: {
            type: 'object',
            properties: {
              type_id: {
                type: 'integer',
                description: 'type_id of the added material',
                example: 2,
              },
              composition: {
                type: 'string',
                description: 'composition of the added material',
                example: 2,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
};
export const getMaterialSchema = {
  description: 'Get a Material',
  tags: ['Material'],
  summary: 'Get all Materials',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'Name of the client',
        example: 'novencia',
      },
    },
    required: ['clientId'],
  },
  responses: {
    200: {
      description: 'Successful response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'HTTP status code',
          },
          data: {
            type: 'object',
            properties: {
              type_id: {
                type: 'integer',
                description: 'type_id of the material',
                example: 2,
              },
              composition: {
                type: 'string',
                description: 'composition of the material to get',
                example: '20% coton',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Material not found',
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
}

export const getMaterialByIdSchema = {
  description: 'Get a Material by ID',
  tags: ['Material'],
  summary: 'Retrieve a Material by ID',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'Name of the client',
        example: 'novencia',
      },
      id: {
        type: 'string',
        description: 'ID of the material to retrieve',
        example: 1,
      },
    },
    required: ['clientId', 'id'],
  },
  responses: {
    200: {
      description: 'Successful response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'HTTP status code',
          },
          data: {
            type: 'object',
            properties: {
              type_id: {
                type: 'integer',
                description: 'type_id of the material',
                example: 2,
              },
              composition: {
                type: 'string',
                description: 'composition of the material to get',
                example: '20% coton',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Material not found',
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
};
export const updateMaterialSchema = {
  description: 'update a Material',
  tags: ['Material'],
  summary: 'Update Material with given values',
  body: {
    type: 'object',
    properties:{
      type_id: {
        type: 'integer',
        description: 'type_id of the material to update',
        example: 2,
      },
      composition: {
        type: 'string',
        description: 'composition of the material to update',
        example: '20% coton',
      },
    }, 
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
        description: 'Material id',
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'HTTP status code',
          },
          data: {
            type: 'object',
            properties: {
              type_id: {
                type: 'integer',
                description: 'type of the material',
                example: 2,
              },
              composition: {
                type: 'string',
                description: 'composition of the material to update',
                example: '20% coton',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Material not found',
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
};

export const deleteMaterialSchema = {
  description: 'Delete a Material',
  tags: ['Material'],
  summary: 'Delete a Material by ID',
  params: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'Name of the client',
        example: 'novencia',
      },
      id: {
        type: 'string',
        description: 'ID of the material to delete',
        example: 1,
      },
    },
    required: ['clientId', 'id'],
  },
  responses: {
    200: {
      description: 'Successful response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'HTTP status code',
          },
          message: {
            type: 'string',
            description: 'Success message',
          },
        },
      },
    },
    404: {
      description: 'Material not found',
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
};

export default { addMaterialSchema, getMaterialSchema, getMaterialByIdSchema, updateMaterialSchema, deleteMaterialSchema };


