export const addTypeSchema = {
  description: 'Create a new Type',
  tags: ['Type'],
  summary: 'Creates new Type with given values',
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
      name: {
        type: 'string',
        description: 'Name of the type to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the type to add',
        example: 'John Doe is smart',
      },
      image: {
        type: 'string',
        description: 'Image of the type to add',
        example: '222',
      },
      product_id: {
        type: 'integer',
        description: 'product_id of the type to add',
        example: 222,
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
              name: {
                type: 'string',
                description: 'Name of the added type',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'description of the added type',
                example: 'John Doe',
              },
              image: {
                type: 'string',
                description: 'image of the added type',
                example: '523',
              },
              product_id: {
                type: 'integer',
                description: 'product_id of the added type',
                example: '523',
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
export const getTypeSchema = {
  description: 'Get a Type',
  tags: ['Type'],
  summary: 'Get all Types',
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
              name: {
                type: 'string',
                description: 'Name of the type',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the type to get',
                example: 'John Doe is smart',
              },
              image: {
                type: 'string',
                description: 'Image of the type',
                example: '520',
              },
              product_id: {
                type: 'integer',
                description: 'product_id of the type to get',
                example: '5220',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Type not found',
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

export const getTypeByIdSchema = {
  description: 'Get a Type by ID',
  tags: ['Type'],
  summary: 'Retrieve a Type by ID',
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
        description: 'ID of the type to retrieve',
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
              name: {
                type: 'string',
                description: 'Name of the type',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the type to get',
                example: 'John Doe is smart',
              },
              image: {
                type: 'string',
                description: 'Image of the type',
                example: '520',
              },
              product_id: {
                type: 'integer',
                description: 'product_id of the type to get',
                example: '5520',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Type not found',
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
export const updateTypeSchema = {
  description: 'update a Type',
  tags: ['Type'],
  summary: 'Update Type with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the type to update',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the type to update',
        example: 'John Doe is smart',
      },
      image: {
        type: 'string',
        description: 'image of the type to update',
        example: '520',
      },
      product_id: {
        type: 'integer',
        description: 'product_id of the type to update',
        example: '523',
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
        description: 'Type id',
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
              name: {
                type: 'string',
                description: 'Name of the type',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the type to update',
                example: 'John Doe is smart',
              },
              image: {
                type: 'string',
                description: 'image of the type',
                example: '5230',
              },
              product_id: {
                type: 'string',
                description: 'product_id of the type to update',
                example: '552',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Type not found',
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

export const deleteTypeSchema = {
  description: 'Delete a Type',
  tags: ['Type'],
  summary: 'Delete a Type by ID',
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
        description: 'ID of the type to delete',
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
      description: 'Type not found',
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

export default { addTypeSchema, getTypeSchema, getTypeByIdSchema, updateTypeSchema, deleteTypeSchema };


