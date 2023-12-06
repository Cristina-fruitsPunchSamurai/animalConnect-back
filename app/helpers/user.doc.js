import expressJSDocSwagger from 'express-jsdoc-swagger';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const options = {
  info: {
    version: '1.0.0',
    title: 'AnimalConnect',
    description: 'Application d\'adoption animal',
  },
  security: {
    BearerAuth: {
      description: 'JWT Authorization',
      type: 'http',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: '../**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {
    customSiteTitle: 'AnimalConnect API Documentation',
    customCss: '.swagger-ui .topbar { display: none }', // Masque la barre supérieure
  },
};

export default (app) => expressJSDocSwagger(app)(options);
