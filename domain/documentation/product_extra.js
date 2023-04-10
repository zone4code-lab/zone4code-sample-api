export const addProduct_extraSchema = {
  description: 'Create a new Product_extra',
  tags: ['Product_extra'],
  summary: 'Creates new Product_extra with given values',
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
        description: 'product_id of the product_extra to add',
        example: 1,
      },
      extra_id: {
        type: 'integer',
        description: 'extra_id of the product_extra to add',
        example: 1,
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
                description: 'product_id of the added product_extra',
                example: 1,
              },
              extra_id: {
                type: 'integer',
                description: 'extra_id of the added product_extra',
                example: 1,
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
export const getProduct_extraSchema = {
  description: 'Get a Product_extra',
  tags: ['Product_extra'],
  summary: 'Get all Product_extras',
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
                description: 'product_id of the product_extra',
                example: 1,
              },
              extra_id: {
                type: 'integer',
                description: 'extra_id of the product_extra to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_extra not found',
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

export const getProduct_extraByIdSchema = {
  description: 'Get a Product_extra by ID',
  tags: ['Product_extra'],
  summary: 'Retrieve a Product_extra by ID',
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
        description: 'ID of the product_extra to retrieve',
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
                description: 'product_id of the product_extra',
                example: 1,
              },
              extra_id: {
                type: 'integer',
                description: 'extra_id of the product_extra to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_extra not found',
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
export const updateProduct_extraSchema = {
  description: 'update a Product_extra',
  tags: ['Product_extra'],
  summary: 'Update Product_extra with given values',
  body: {
    type: 'object',
    properties:{
      product_id: {
        type: 'integer',
        description: 'product_id of the product_extra to update',
        example: 1,
      },
      extra_id: {
        type: 'integer',
        description: 'extra_id of the product_extra to update',
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
        description: 'Product_extra id',
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
                description: 'product_id of the product_extra',
                example: 1,
              },
              extra_id: {
                type: 'integer',
                description: 'extar_id of the product_extra to update',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_extra not found',
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

export const deleteProduct_extraSchema = {
  description: 'Delete a Product_extra',
  tags: ['Product_extra'],
  summary: 'Delete a Product_extra by ID',
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
        description: 'ID of the product_extra to delete',
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
      description: 'Product_extra not found',
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

export default { addProduct_extraSchema, getProduct_extraSchema, getProduct_extraByIdSchema, updateProduct_extraSchema, deleteProduct_extraSchema };


