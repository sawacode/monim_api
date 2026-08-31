// swaggerConfig.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'IMAFRIK API',
            version: '1.0.0',
            description: 'Documentation de mon API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur developpement',
            },
            {
                url: 'https://api-test.xxxxxxx.com:3000',
                description: 'Serveur test',
            },
            {
                url: 'http://api.xxxxxxxxxx.com:3000',
                description: 'Serveur production',
            }, 
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'S-API-KEY'
                },
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        externalDocs: {
            description: 'En savoir plus sur OpenAPI',
            url: 'https://swagger.io/docs/specification/about/'
        },
        security: [{
            bearerAuth: [],
        }],
    },
    apis: ['./route.js'], // Chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = (app, port) => {
    //SWAGGER UI
    app.use('/v1.0/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    // Swagger JSON
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });
    console.log(`📚 Swagger V1 docs available at http://localhost:${port}/v1.0/api-docs`);
};