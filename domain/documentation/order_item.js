export const addOrder_itemSchema = {
  description: 'Create a new Order_item',
  tags: ['Order_item'],
  summary: 'Creates new Order_item with given values',
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
      order_id: {
        type: 'integer',
        description: 'order_id of the order_item to add',
        example: 1,
      },
      type_id: {
        type: 'integer',
        description: 'type_id of the order_item to add',
        example: 1,
      },
      color_id: {
        type: 'integer',
        description: 'color_id of the order_item to add',
        example: 1,
      },
      size_id: {
        type: 'integer',
        description: 'color of the order_item to add',
        example: 1,
      },
      extras_id: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'The ID of the extra',
            example: c123,
          },
        },
        description: 'extras_id of the order_item ',
        example: { id: c123 },
      },
      price: {
        type: 'number',
        description: 'price of the order_item to add',
        example: 30,
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
              order_id: {
                type: 'integer',
                description: 'order_id of the order_item added',
                example: 1,
              },
              type_id: {
                type: 'integer',
                description: 'type_id of the order_item added',
                example: 1,
              },
              color_id: {
                type: 'integer',
                description: 'color_id of the order_item  added',
                example: 1,
              },
              size_id: {
                type: 'integer',
                description: 'color of the order_item added',
                example: 1,
              },
              extras_id: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    description: 'The ID of the extra',
                    example: c123,
                  },
                },
                description: 'extras_id of the order_item ',
                example: { id: c123 },
              },
              price: {
                type: 'number',
                description: 'price of the order_item added',
                example: 30,
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
export const getOrder_itemSchema = {
  description: 'Get a Order_item',
  tags: ['Order_item'],
  summary: 'Get all Order_items',
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
              order_id: {
                type: 'integer',
                description: 'order_id of the order_item to get',
                example: 1,
              },
              type_id: {
                type: 'integer',
                description: 'type_id of the order_item to get',
                example: 1,
              },
              color_id: {
                type: 'integer',
                description: 'color_id of the order_item to get',
                example: 1,
              },
              size_id: {
                type: 'integer',
                description: 'color of the order_item to get',
                example: 1,
              },
              extras_id: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    description: 'The ID of the extra',
                    example: c123,
                  },
                },
                description: 'extras_id of the order_item ',
                example: { id: c123 },
              },
              price: {
                type: 'number',
                description: 'price of the order_item to get',
                example: 30,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Order_item not found',
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

export const getOrder_itemByIdSchema = {
  description: 'Get a Order_item by ID',
  tags: ['Order_item'],
  summary: 'Retrieve a Order_item by ID',
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
        description: 'ID of the order_item to retrieve',
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
              order_id: {
                type: 'integer',
                description: 'order_id of the order_item ',
                example: 1,
              },
              type_id: {
                type: 'integer',
                description: 'type_id of the order_item ',
                example: 1,
              },
              color_id: {
                type: 'integer',
                description: 'color_id of the order_item ',
                example: 1,
              },
              size_id: {
                type: 'integer',
                description: 'color of the order_item ',
                example: 1,
              },
              extras_id: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    description: 'The ID of the extra',
                    example: c123,
                  },
                },
                description: 'extras_id of the order_item ',
                example: { id: c123 },
              },
              price: {
                type: 'number',
                description: 'price of the order_item ',
                example: 30,
              },
        
            },
          },
        },
      },
    },
    404: {
      description: 'Order_item not found',
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
export const updateOrder_itemSchema = {
  description: 'update a Order_item',
  tags: ['Order_item'],
  summary: 'Update Order_item with given values',
  body: {
    type: 'object',
    properties:{
      order_id: {
        type: 'integer',
        description: 'order_id of the order_item to update',
        example: 1,
      },
      type_id: {
        type: 'integer',
        description: 'type_id of the order_item to update',
        example: 1,
      },
      color_id: {
        type: 'integer',
        description: 'color_id of the order_item to update',
        example: 1,
      },
      size_id: {
        type: 'integer',
        description: 'color of the order_item to update',
        example: 1,
      },
      extras_id: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'The ID of the extra',
            example: c123,
          },
        },
        description: 'extras_id of the order_item ',
        example: { id: c123 },
      },
      price: {
        type: 'number',
        description: 'price of the order_item to update',
        example: 30,
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
        description: 'Order_item id',
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
              order_id: {
                type: 'integer',
                description: 'order_id of the order_item ',
                example: 1,
              },
              type_id: {
                type: 'integer',
                description: 'type_id of the order_item ',
                example: 1,
              },
              color_id: {
                type: 'integer',
                description: 'color_id of the order_item ',
                example: 1,
              },
              size_id: {
                type: 'integer',
                description: 'color of the order_item ',
                example: 1,
              },
              extras_id: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    description: 'The ID of the extra',
                    example: c123,
                  },
                },
                description: 'extras_id of the order_item ',
                example: { id: c123 },
              },
              price: {
                type: 'number',
                description: 'price of the order_item ',
                example: 30,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Order_item not found',
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

export const deleteOrder_itemSchema = {
  description: 'Delete a Order_item',
  tags: ['Order_item'],
  summary: 'Delete a Order_item by ID',
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
        description: 'ID of the order_item to delete',
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
      description: 'Order_item not found',
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

export default { addOrder_itemSchema, getOrder_itemSchema, getOrder_itemByIdSchema, updateOrder_itemSchema, deleteOrder_itemSchema };


