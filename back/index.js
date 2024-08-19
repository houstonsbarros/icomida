const fastify = require('fastify')({ logger: true });
const swagger = require('@fastify/swagger');

fastify.register(swagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'API Documentation',
      description: 'API documentation for my project',
      version: '0.1.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
});

fastify.get('/', {
  schema: {
    description: 'endpoint inicial',
    tags: ['example'],
    summary: ' ',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  handler: async (request, reply) => {
    return { hello: 'world' };
  },
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
