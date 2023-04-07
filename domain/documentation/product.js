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
      image: {
        type: 'string',
        description: 'id image of the product to add',
        example: '152',
      },
      exclude_extra: {
        type: 'boolean',
        description: 'if the product to add does not have extra type true',
        example: true,
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
              description: {
                type: 'string',
                description: 'description of the added product',
                example: 'John Doe',
              },
              image: {
                type: 'string',
                description: 'image of the added product',
                example: '252',
              },
              exclude_extra: {
                type: 'boolean',
                description: 'exclude_extra of the added product',
                example: false,
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
  summary: 'Get all Products',
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
              image: {
                type: 'string',
                description: 'image of the product to get',
                example: '522',
              },
              exclude_extra: {
                type: 'boolean',
                description: 'exclude_extra of the product to get',
                example: true,
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
              image: {
                type: 'string',
                description: 'image of the product to get',
                example: '525',
              },
              exclude_extra: {
                type: 'boolean',
                description: 'exclude_extra of the product to get',
                example: false,
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
        description: 'Name of the product to update',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the product to update',
        example: 'John Doe is smart',
      },
      image: {
        type: 'string',
        description: 'image of the product to update',
        example: '522',
      },
      exclude_extra: {
        type: 'boolean',
        description: 'exclude_extra of the product to update',
        example: true,
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
                description: 'Name of the product to update',
                example: 'John Doe is smart',
              },
              image: {
                type: 'string',
                description: 'image of the product to update',
                example: '525',
              },
              exclude_extra: {
                type: 'boolean',
                description: 'exclude_extra of the product to update',
                example:false,
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


