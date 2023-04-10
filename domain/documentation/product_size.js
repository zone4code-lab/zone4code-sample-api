export const addProduct_sizeSchema = {
  description: 'Create a new Product_size',
  tags: ['Product_size'],
  summary: 'Creates new Product_size with given values',
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
      product_id: {
        type: 'integer',
        description: 'product_id of the product_size to add',
        example: 5223,
      },
      size_id: {
        type: ['integer', 'null'],
        description: 'product_id of the product_size to add',
        example:523,
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
              product_id: {
                type: 'integer',
                description: 'product_id of the added product_size',
                example: 252,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the added product_size',
                example: 22,
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
export const getProduct_sizeSchema = {
  description: 'Get a Product_size',
  tags: ['Product_size'],
  summary: 'Get all Product_sizes',
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
              product_id: {
                type: 'integer',
                description: 'product_id of the product_size',
                example: 1,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the product_size to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_size not found',
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

export const getProduct_sizeByIdSchema = {
 description: 'Get a Product_size by ID',
  tags: ['Product_size'],
  summary: 'Retrieve a Product_size by ID',
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
        description: 'ID of the product_size to retrieve',
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
              product_id: {
                type: 'integer',
                description: 'product_id of the product_size',
                example: 1,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the product_size to get',
                example: 2,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_size not found',
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
export const updateProduct_sizeSchema = {
  description: 'update a Product_size',
  tags: ['Product_size'],
  summary: 'Update Product_size with given values',
  body: {
    type: 'object',
    properties:{
      product_id: {
        type: 'integer',
        description: 'product_id of the product_size to update',
        example: 5,
      },
      size_id: {
        type: ['integer', 'null'],
        description: 'size_id of the product_size to update',
        example: 1,
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
        description: 'Product_size id',
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
              product_id: {
                type: 'integer',
                description: 'product_id of the product_size',
                example: 5,
              },
              size_id: {
                type: ['integer', 'null'],
                description: 'size_id of the product_size to update',
                example: 5,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_size not found',
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

export const deleteProduct_sizeSchema = {
  description: 'Delete a Product_size',
  tags: ['Product_size'],
  summary: 'Delete a Product_size by ID',
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
        description: 'ID of the product_size to delete',
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
      description: 'Product_size not found',
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

export default { addProduct_sizeSchema, getProduct_sizeSchema, getProduct_sizeByIdSchema, updateProduct_sizeSchema, deleteProduct_sizeSchema };


