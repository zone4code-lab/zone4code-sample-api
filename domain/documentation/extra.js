export const addExtraSchema = {
  description: 'Create a new Extra',
  tags: ['Extra'],
  summary: 'Creates new Extra with given values',
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
      extra: {
        type: 'string',
        description: 'extra of the extra to add',
        example: 'french fries supplement',
      },
      price: {
        type: 'number',
        description: 'price of the extra to add',
        example: 1.5,
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
              extra: {
                type: 'string',
                description: 'Name of the added extra',
                example: 'french fries supplement',
              },
              price: {
                type: 'number',
                description: 'price of the added extra',
                example: 1.5,
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
export const getExtraSchema = {
  description: 'Get a Extra',
  tags: ['Extra'],
  summary: 'Get all Extras',
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
              extra: {
                type: 'string',
                description: 'Name of the extra',
                example: 'french fries supplement',
              },
              price: {
                type: 'number',
                description: 'price of the extra to get',
                example: 1.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Extra not found',
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

export const getExtraByIdSchema = {
  description: 'Get a Extra by ID',
  tags: ['Extra'],
  summary: 'Retrieve a Extra by ID',
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
        description: 'ID of the extra to retrieve',
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
              extra: {
                type: 'string',
                description: 'Name of the extra',
                example: 'french fries supplement',
              },
              price: {
                type: 'number',
                description: 'price of the extra to get',
                example: 1.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Extra not found',
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
export const updateExtraSchema = {
  description: 'update a Extra',
  tags: ['Extra'],
  summary: 'Update Extra with given values',
  body: {
    type: 'object',
    properties:{
      extra: {
        type: 'string',
        description: 'Name of the extra to update',
        example: 'french fries supplement',
      },
      price: {
        type: 'number',
        description: 'price of the extra to update',
        example: 1.5,
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
        description: 'Extra id',
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
              extra: {
                type: 'string',
                description: 'Name of the extra',
                example: 'french fries supplement',
              },
              price: {
                type: 'number',
                description: 'price of the extra to update',
                example: 1.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Extra not found',
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

export const deleteExtraSchema = {
  description: 'Delete a Extra',
  tags: ['Extra'],
  summary: 'Delete a Extra by ID',
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
        description: 'ID of the extra to delete',
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
      description: 'Extra not found',
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

export default { addExtraSchema, getExtraSchema, getExtraByIdSchema, updateExtraSchema, deleteExtraSchema };


