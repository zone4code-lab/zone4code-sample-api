export const addColorSchema = {
  description: 'Create a new Color',
  tags: ['Color'],
  summary: 'Creates new Color with given values',
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
      color: {
        type: 'string',
        description: 'color of the color to add',
        example: 'red',
      },
      type_id: {
        type: ['integer', 'null'],
        description: 'type_id of the color to add',
        example: 525,
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
              color: {
                type: 'string',
                description: 'color of the color to add',
                example: 'red',
              },
              type_id: {
                type: ['integer', 'null'],
                description: 'type_id of the color to add',
                example: 525,
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
export const getColorSchema = {
  description: 'Get a Color',
  tags: ['Color'],
  summary: 'Get all Colors',
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
              color: {
                type: 'string',
                description: 'color of the color to get',
                example: 'red',
              },
              type_id: {
                type: ['integer', 'null'],
                description: 'type_id of the color to get',
                example: 525,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Color not found',
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

export const getColorByIdSchema = {
  description: 'Get a Color by ID',
  tags: ['Color'],
  summary: 'Retrieve a Color by ID',
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
        description: 'ID of the color to retrieve',
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
              color: {
                type: 'string',
                description: 'color of the color',
                example: 'red',
              },
              type_id: {
                type: ['integer', 'null'],
                description: 'type_id of the color',
                example: 525,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Color not found',
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
export const updateColorSchema = {
  description: 'update a Color',
  tags: ['Color'],
  summary: 'Update Color with given values',
  body: {
    type: 'object',
    properties:{
      color: {
        type: 'string',
        description: 'color of the color to update',
        example: 'red',
      },
      type_id: {
        type: ['integer', 'null'],
        description: 'type_id of the color to update',
        example: 525,
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
        description: 'Color id',
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
              color: {
                type: 'string',
                description: 'Name of the color',
                example: 'John Doe',
              },
              type_id: {
                type: ['integer', 'null'],
                description: 'type_id of the color to update',
                example: 4,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Color not found',
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

export const deleteColorSchema = {
  description: 'Delete a Color',
  tags: ['Color'],
  summary: 'Delete a Color by ID',
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
        description: 'ID of the color to delete',
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
      description: 'Color not found',
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

export default { addColorSchema, getColorSchema, getColorByIdSchema, updateColorSchema, deleteColorSchema };


