export default {
  post: {
    tags: ['Justify content operations'],
    description: 'Justify content',
    operationId: 'justifyContent',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/Content',
          },
          required: true,
          description: 'Justify content',
        },
      },
    },
    responses: {
      '200': {
        description: 'Content is justified successfully',
      },
      '401': {
        description: "Content or bearer Token auth doens't exist in the request",
      },
      '402': {
        description: 'Payment Required',
      },
    },
  },
};
