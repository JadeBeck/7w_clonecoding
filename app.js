const express = require('express');
const Http = require('http');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
const http = Http.createServer(app);
const port = process.env.EXPRESS_PORT || 3000;

//app.config['JSON_AS_ASCII'] = False
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
    cors({
        origin: '*',
    })
);
app.use('/', routes);

http.listen(port, () => {
    console.log(`★열려라 서버~~~~~!!!★ : port ${port}`);
});

module.exports = http;
