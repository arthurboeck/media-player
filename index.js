const bodyParser = require('body-parser')
const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const router = express();
const port = process.env.PORT || 8080;

const server = router.listen(port, () => console.log(`App listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

router.use(bodyParser.json())
router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./controller/playlist-controller.js')(router);
require('./controller/song-controller.js')(router);