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
        type: ['string', 'null'],
        description: 'Name of the order to add',
        example: 'John Doe',
      },
      customer_id: {
        type: 'string',
        description: 'customer_id of the order to add',
        example: '4225',
      },
      tax: {
        type: ['string','null'],
        description: 'tax of the order to add',
        example: '4225',
      },
      total: {
        type: 'number',
        description: 'total of the order to add',
        example: 225,
      },
      status: {
        type: 'string',
        description: 'status of the order to add',
        example: 'draft',
      },
      shipping: {
        type: ['string','null'],
        description: 'shipping of the order to add',
        example: 'Overnigt',
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
                type: ['string', 'null'],
                description: 'Name of the order added',
                example: 'John Doe',
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the order  added',
                example: '4225',
              },
              tax: {
                type: ['string','null'],
                description: 'tax of the order added',
                example: '4225',
              },
              total: {
                type: 'number',
                description: 'total of the order added',
                example: 225,
              },
              status: {
                type: 'string',
                description: 'status of the order added',
                example: 'draft',
              },
              shipping: {
                type: ['string','null'],
                description: 'shipping of the order added',
                example: 'Overnigt',
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
  summary: 'Get all Orders',
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
                type: ['string', 'null'],
                description: 'Name of the order to get',
                example: 'John Doe',
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the order to get',
                example: '4225',
              },
              tax: {
                type: ['string','null'],
                description: 'tax of the order to get',
                example: '4225',
              },
              total: {
                type: 'number',
                description: 'total of the order to get',
                example: 225,
              },
              status: {
                type: 'string',
                description: 'status of the order to get',
                example: 'draft',
              },
              shipping: {
                type: ['string','null'],
                description: 'shipping of the order to get',
                example: 'Overnigt',
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
                type: ['string', 'null'],
                description: 'Name of the order ',
                example: 'John Doe',
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the order ',
                example: '4225',
              },
              tax: {
                type: ['string','null'],
                description: 'tax of the order ',
                example: '4225',
              },
              total: {
                type: 'number',
                description: 'total of the order ',
                example: 225,
              },
              status: {
                type: 'string',
                description: 'status of the order ',
                example: 'draft',
              },
              shipping: {
                type: ['string','null'],
                description: 'shipping of the order ',
                example: 'Overnigt',
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
        type: ['string', 'null'],
        description: 'Name of the order to update',
        example: 'John Doe',
      },
      customer_id: {
        type: 'string',
        description: 'customer_id of the order to update',
        example: '4225',
      },
      tax: {
        type: ['string','null'],
        description: 'tax of the order to update',
        example: '4225',
      },
      total: {
        type: 'number',
        description: 'total of the order to update',
        example: 225,
      },
      status: {
        type: 'string',
        description: 'status of the order to update',
        example: 'draft',
      },
      shipping: {
        type: ['string','null'],
        description: 'shipping of the order to update',
        example: 'Overnigt',
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
                type: ['string', 'null'],
                description: 'Name of the order ',
                example: 'John Doe',
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the order ',
                example: '4225',
              },
              tax: {
                type: ['string','null'],
                description: 'tax of the order ',
                example: '4225',
              },
              total: {
                type: 'number',
                description: 'total of the order ',
                example: 225,
              },
              status: {
                type: 'string',
                description: 'status of the order ',
                example: 'draft',
              },
              shipping: {
                type: ['string','null'],
                description: 'shipping of the order ',
                example: 'Overnigt',
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


