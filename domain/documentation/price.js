export const addPriceSchema = {
  description: 'Create a new Price',
  tags: ['Price'],
  summary: 'Creates new Price with given values',
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
    properties: {
      type_id: {
        type: 'integer',
        description: 'type_id of the price to add',
        example: 1,
      },
      size_id: {
        type: ['integer', 'null'],
        description: 'size_id of the price to add',
        example: 2,
      },
      price: {
        type: 'number',
        description: 'price of the type to add',
        example: 20.5,
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
                description: 'type_id of the price added',
                example: 1,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the price added',
                example: 2,
              },
              price: {
                type: 'number',
                description: 'price of the type added',
                example: 20.5,
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
export const getPriceSchema = {
  description: 'Get a Price',
  tags: ['Price'],
  summary: 'Get all Prices',
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
                description: 'type_id of the price ',
                example: 1,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the price ',
                example: 2,
              },
              price: {
                type: 'number',
                description: 'price of the type ',
                example: 20.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Price not found',
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

export const getPriceByIdSchema = {
  description: 'Get a Price by ID',
  tags: ['Price'],
  summary: 'Retrieve a Price by ID',
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
        description: 'ID of the price to retrieve',
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
                description: 'type_id of the price ',
                example: 1,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the price ',
                example: 2,
              },
              price: {
                type: 'number',
                description: 'price of the type',
                example: 20.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Price not found',
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
export const updatePriceSchema = {
  description: 'update a Price',
  tags: ['Price'],
  summary: 'Update Price with given values',
  body: {
    type: 'object',
    properties:{
      type_id: {
        type: 'integer',
        description: 'type_id of the price to update',
        example: 1,
      },
      size_id: {
        type: ['integer', 'null'],
        description: 'size_id of the price to update',
        example: 2,
      },
      price: {
        type: 'number',
        description: 'price of the type to update',
        example: 20.5,
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
        description: 'Price id',
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
                description: 'type_id of the price ',
                example: 1,
              },
              size_id: {
                type: 'integer',
                description: 'size_id of the price ',
                example: 2,
              },
              price: {
                type: 'number',
                description: 'price of the type ',
                example: 20.5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Price not found',
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

export const deletePriceSchema = {
  description: 'Delete a Price',
  tags: ['Price'],
  summary: 'Delete a Price by ID',
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
        description: 'ID of the price to delete',
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
      description: 'Price not found',
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

export default { addPriceSchema, getPriceSchema, getPriceByIdSchema, updatePriceSchema, deletePriceSchema };


