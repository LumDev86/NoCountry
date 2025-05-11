import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sistema de Chat',
      version: '1.0.0',
      description: 'Documentación de la API del sistema de chat',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./src/routers/*.ts'], // ajusta si usás otra estructura
};

export const swaggerSpec = swaggerJSDoc(options);
