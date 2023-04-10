export const addCategorySchema = {
  description: 'Create a new Category',
  tags: ['Category'],
  summary: 'Creates new Category with given values',
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
        description: 'Name of the category to add',
        example: 'Newest',
      },
      parent_id: {
        type: ['integer', 'null'],
        description: 'parent_id of the category to add',
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
              name: {
                type: 'string',
                description: 'Name of the added category',
                example: 'John Doe',
              },
              parent_id: {
                type: ['integer', 'null'],
                description: 'parent_id of the added category',
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
export const getCategorySchema = {
  description: 'Get a Category',
  tags: ['Category'],
  summary: 'Get all Categorys',
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
                description: 'Name of the category',
                example: 'John Doe',
              },
              parent_id: {
                type: ['integer', 'null'],
                description: 'parent_id of the category to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Category not found',
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

export const getCategoryByIdSchema = {
  description: 'Get a Category by ID',
  tags: ['Category'],
  summary: 'Retrieve a Category by ID',
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
        description: 'ID of the category to retrieve',
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
                description: 'Name of the category',
                example: 'John Doe',
              },
              parent_id: {
                type: ['integer', 'null'],
                description: 'parent_id of the category to get',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Category not found',
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
export const updateCategorySchema = {
  description: 'update a Category',
  tags: ['Category'],
  summary: 'Update Category with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the category to update',
        example: 'the newest',
      },
      parent_id: {
        type: ['integer', 'null'],
        description: 'parent_id of the category to update',
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
        description: 'Category id',
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
                description: 'Name of the category',
                example: 'the newest',
              },
              parent_id: {
                type: ['integer', 'null'],
                description: 'parent_id of the category to update',
                example: 1,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Category not found',
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

export const deleteCategorySchema = {
  description: 'Delete a Category',
  tags: ['Category'],
  summary: 'Delete a Category by ID',
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
        description: 'ID of the category to delete',
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
      description: 'Category not found',
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

export default { addCategorySchema, getCategorySchema, getCategoryByIdSchema, updateCategorySchema, deleteCategorySchema };


