import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Monitoreo',
      version: '1.0.0',
      description: 'Documentación de los endpoints del proyecto de Tecnologías en Internet',
    },
  },
  apis: ['./src/routes/*.ts'], // <-- aquí Swagger buscará las rutas documentadas
};

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express, port: number) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📘 Swagger disponible en: http://localhost:${port}/api-docs`);
}
