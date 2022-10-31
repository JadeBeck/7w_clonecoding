const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
require('dotenv').config();

const options = {
    info: {
        title: 'Team7s Marketkurly Clone Coding',
        description: '7조의 API가 잘 굴러갈까나?🤔',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            in: 'header',
            bearerFormat: 'JWT',
        },
    },
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];
swaggerAutogen(outputFile, endpointsFiles, options);