export const addProductSchema = {
  description: 'Create a new Product',
  tags: ['Product'],
  summary: 'Creates new Product with given values',
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
        description: 'Name of the product to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the product to add',
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
                description: 'Name of the added product',
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
export const getProductSchema = {
  description: 'Get a Product',
  tags: ['Product'],
  summary: 'Get a Product by name',
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
                description: 'Name of the product',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the product to get',
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
}

export const getProductByIdSchema = {
 description: 'Get a Product by ID',
  tags: ['Product'],
  summary: 'Retrieve a Product by ID',
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
        description: 'ID of the product to retrieve',
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
                description: 'Name of the product',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the product to get',
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
export const updateProductSchema = {
  description: 'update a Product',
  tags: ['Product'],
  summary: 'Update Product with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the product to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the product to add',
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
        description: 'Product id',
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
                description: 'Name of the product',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the product to update',
                example: 'John Doe is smart',
              },
            },
          },
        },
    },
  },
};

export const deleteProductSchema = {
  description: 'Delete a Product',
  tags: ['Product'],
  summary: 'Delete a Product by ID',
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
        description: 'ID of the product to delete',
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

export default { addProductSchema, getProductSchema, getProductByIdSchema, updateProductSchema, deleteProductSchema };


