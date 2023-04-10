export const addProduct_categorySchema = {
  description: 'Create a new Product_category',
  tags: ['Product_category'],
  summary: 'Creates new Product_category with given values',
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
        type: ['integer', 'null'],
        description: 'product_id of the product_category to add',
        example: 1,
      },
      category_id: {
        type: 'integer',
        description: 'category_id of the product_category to add',
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
                type: ['integer', 'null'],
                description: 'product_id of the added product_category',
                example: 1,
              },
              category_id: {
                type: 'integer',
                description: 'category_id of the added product_category',
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
export const getProduct_categorySchema = {
  description: 'Get a Product_category',
  tags: ['Product_category'],
  summary: 'Get all Product_categorys',
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
                type: ['integer', 'null'],
                description: 'product_id of the product_category',
                example: 1,
              },
              category_id: {
                type: 'integer',
                description: 'category_id of the product_category to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_category not found',
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

export const getProduct_categoryByIdSchema = {
  description: 'Get a Product_category by ID',
  tags: ['Product_category'],
  summary: 'Retrieve a Product_category by ID',
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
        description: 'ID of the product_category to retrieve',
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
                type: ['integer', 'null'],
                description: 'product_id of the product_category',
                example: 1,
              },
              category_id: {
                type: 'integer',
                description: 'category_id of the product_category to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_category not found',
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
export const updateProduct_categorySchema = {
  description: 'update a Product_category',
  tags: ['Product_category'],
  summary: 'Update Product_category with given values',
  body: {
    type: 'object',
    properties:{
      product_id: {
        type: ['integer', 'null'],
        description: 'product_id of the product_category to update',
        example: 1,
      },
      category_id: {
        type: 'integer',
        description: 'category_id of the product_category to update',
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
        description: 'Product_category id',
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
                type: ['integer', 'null'],
                description: 'product_id of the product_category',
                example: 1,
              },
              category_id: {
                type: 'integer',
                description: 'category_id of the product_category to update',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Product_category not found',
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

export const deleteProduct_categorySchema = {
  description: 'Delete a Product_category',
  tags: ['Product_category'],
  summary: 'Delete a Product_category by ID',
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
        description: 'ID of the product_category to delete',
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
      description: 'Product_category not found',
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
export default { addProduct_categorySchema, getProduct_categorySchema, getProduct_categoryByIdSchema, updateProduct_categorySchema, deleteProduct_categorySchema };


