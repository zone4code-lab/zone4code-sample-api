export const addOrderSchema = {
  description: 'Create a new Order',
  tags: ['Order'],
  summary: 'Creates new Order with given values',
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
        description: 'Name of the order to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the order to add',
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
                description: 'Name of the added order',
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
export const getOrderSchema = {
  description: 'Get a Order',
  tags: ['Order'],
  summary: 'Get a Order by name',
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
                description: 'Name of the order',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the order to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Order not found',
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

export const getOrderByIdSchema = {
 description: 'Get a Order by ID',
  tags: ['Order'],
  summary: 'Retrieve a Order by ID',
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
        description: 'ID of the order to retrieve',
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
                description: 'Name of the order',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the order to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Order not found',
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
export const updateOrderSchema = {
  description: 'update a Order',
  tags: ['Order'],
  summary: 'Update Order with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the order to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the order to add',
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
        description: 'Order id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
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
                description: 'Name of the order',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the order to update',
                example: 'John Doe is smart',
              },
            },
          },
        },
    },
  },
};

export const deleteOrderSchema = {
  description: 'Delete a Order',
  tags: ['Order'],
  summary: 'Delete a Order by ID',
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
        description: 'ID of the order to delete',
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
      description: 'Order not found',
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

export default { addOrderSchema, getOrderSchema, getOrderByIdSchema, updateOrderSchema, deleteOrderSchema };


