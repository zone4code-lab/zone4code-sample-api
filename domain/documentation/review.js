export const addReviewSchema = {
  description: 'Create a new Review',
  tags: ['Review'],
  summary: 'Creates new Review with given values',
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
      type_id: {
        type: 'integer',
        description: 'type_id of the review to add',
        example: 5,
      },
      customer_id: {
        type: 'string',
        description: 'customer_id of the review to add',
        example: '525',
      },
      rating: {
        type: 'string',
        description: 'rating of the review to add',
        example: "5",
      },
      comment: {
        type: 'string',
        description: 'comment of the review to add',
        example: "it's cool",
      },
      images: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The ID of the image',
            example: 'abc123',
          },
        },
        description: 'Images of the review',
        example: { id: 'abc123' },
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
            example: '200 OK',
          },
          data: {
            type: 'object',
            properties: {
              type_id: {
                type: 'integer',
                description: 'type_id of the review to add',
                example: 5,
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the review to add',
                example: '525',
              },
              rating: {
                type: 'string',
                description: 'rating of the review to add',
                example: '8',
              },
              images: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The ID of the image',
                    example: 'abc123',
                  },
                },
                description: 'Images of the review',
                example: { id: 'abc123' },
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

export const getReviewSchema = {
  description: 'Get a Review',
  tags: ['Review'],
  summary: 'Get all Reviews',
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
                description: 'type_id of the review to get',
                example: 5,
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the review to get',
                example: '525',
              },
              rating: {
                type: 'string',
                description: 'rating of the review to get',
                example: '10',
              },
              images: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The ID of the image',
                    example: 1,
                  },
                },
                description: 'Images of the review',
                example: { id: 1 },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Review not found',
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

export const getReviewByIdSchema = {
 description: 'Get a Review by ID',
  tags: ['Review'],
  summary: 'Retrieve a Review by ID',
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
        description: 'ID of the review to retrieve',
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
                description: 'type_id of the review to get',
                example: 5,
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the review to get',
                example: '525',
              },
              rating: {
                type: 'string',
                description: 'rating of the review to get',
                example: '10',
              },
              images: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The ID of the image',
                    example: 1,
                  },
                },
                description: 'Images of the review',
                example: { id: 1 },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Review not found',
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
export const updateReviewSchema = {
  description: 'update a Review',
  tags: ['Review'],
  summary: 'Update Review with given values',
  body: {
    type: 'object',
    properties:{
      type_id: {
        type: 'integer',
        description: 'type_id of the review to update',
        example: 5,
      },
      customer_id: {
        type: 'string',
        description: 'customer_id of the review to update',
        example: '525',
      },
      rating: {
        type: 'string',
        description: 'rating of the review to update',
        example: '10',
      },
      images: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The ID of the image',
            example: 1,
          },
        },
        description: 'Images of the review',
        example: { id: 1 },
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
        description: 'Review id',
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
                description: 'type_id of the review updated',
                example: 5,
              },
              customer_id: {
                type: 'string',
                description: 'customer_id of the review updated',
                example: '525',
              },
              rating: {
                type: 'string',
                description: 'rating of the review updated',
                example: '10',
              },
              images: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The ID of the image',
                    example: 1,
                  },
                },
                description: 'Images of the review',
                example: { id: 1 },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Review not found',
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

export const deleteReviewSchema = {
  description: 'Delete a Review',
  tags: ['Review'],
  summary: 'Delete a Review by ID',
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
        description: 'ID of the review to delete',
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
      description: 'Review not found',
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

export default { addReviewSchema, getReviewSchema, getReviewByIdSchema, updateReviewSchema, deleteReviewSchema };


