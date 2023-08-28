const bodyParser = require('body-parser')
const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

app.use(bodyParser.json())
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./controller/playlist-controller.js')(app);