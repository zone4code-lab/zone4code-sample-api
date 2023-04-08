---
to: domain/documentation/<%= name%>.js
---
export const add<%= h.capitalize(name)%>Schema = {
  description: 'Create a new <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Creates new <%= h.capitalize(name)%> with given values',
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
        description: 'Name of the <%= name%> to add',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the <%= name%> to add',
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
                description: 'Name of the added <%= name%>',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'description of the added <%= name%>',
                example: 'John Doe is smart',
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
export const get<%= h.capitalize(name)%>Schema = {
  description: 'Get a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Get all <%= h.capitalize(name)%>s',
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
                description: 'Name of the <%= name%>',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Description of the <%= name%> to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: '<%= h.capitalize(name)%> not found',
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

export const get<%= h.capitalize(name)%>ByIdSchema = {
  description: 'Get a <%= h.capitalize(name)%> by ID',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Retrieve a <%= h.capitalize(name)%> by ID',
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
        description: 'ID of the <%= name%> to retrieve',
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
                description: 'Name of the <%= name%>',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the <%= name%> to get',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: '<%= h.capitalize(name)%> not found',
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
export const update<%= h.capitalize(name)%>Schema = {
  description: 'update a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Update <%= h.capitalize(name)%> with given values',
  body: {
    type: 'object',
    properties:{
      name: {
        type: 'string',
        description: 'Name of the <%= name%> to update',
        example: 'John Doe',
      },
      description: {
        type: 'string',
        description: 'Description of the <%= name%> to update',
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
        description: '<%= h.capitalize(name)%> id',
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
                description: 'Name of the <%= name%>',
                example: 'John Doe',
              },
              description: {
                type: 'string',
                description: 'Name of the <%= name%> to update',
                example: 'John Doe is smart',
              },
            },
          },
        },
      },
    },
    404: {
      description: '<%= h.capitalize(name)%> not found',
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

export const delete<%= h.capitalize(name)%>Schema = {
  description: 'Delete a <%= h.capitalize(name)%>',
  tags: ['<%= h.capitalize(name)%>'],
  summary: 'Delete a <%= h.capitalize(name)%> by ID',
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
        description: 'ID of the <%= name%> to delete',
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
      description: '<%= h.capitalize(name)%> not found',
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

export default { add<%= h.capitalize(name)%>Schema, get<%= h.capitalize(name)%>Schema, get<%= h.capitalize(name)%>ByIdSchema, update<%= h.capitalize(name)%>Schema, delete<%= h.capitalize(name)%>Schema };


