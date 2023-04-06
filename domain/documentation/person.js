export const addPersonSchema = {
  description: 'Create a new Person',
  tags: ['Person'],
  summary: 'Creates new Person with given values',
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
        description: 'Name of the person to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the person to add',
        example: 'John Doe is smart',
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
                description: 'Name of the added person',
                example: 'John Doe',
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
export const getPersonSchema = {
  description: 'Get a Person',
  tags: ['Person'],
  summary: 'Get all Persons',
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
                description: 'Name of the person',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the person to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Person not found',
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

export const getPersonByIdSchema = {
 description: 'Get a Person by ID',
  tags: ['Person'],
  summary: 'Retrieve a Person by ID',
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
        description: 'ID of the person to retrieve',
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
                description: 'Name of the person',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the person to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Person not found',
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
export const updatePersonSchema = {
  description: 'update a Person',
  tags: ['Person'],
  summary: 'Update Person with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the person to update',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the person to update',
        example: 'John Doe is smart',
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
        description: 'Person id',
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
                description: 'Name of the person',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the person to update',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product not found',
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

export const deletePersonSchema = {
  description: 'Delete a Person',
  tags: ['Person'],
  summary: 'Delete a Person by ID',
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
        description: 'ID of the person to delete',
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
      description: 'Person not found',
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

export default { addPersonSchema, getPersonSchema, getPersonByIdSchema, updatePersonSchema, deletePersonSchema };


