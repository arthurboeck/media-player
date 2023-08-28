// const express = require('express');
// const swaggerUi = require('swagger-ui-express')
// const swaggerFile = require('./swagger-output.json')

// const app = express();
// const port = process.env.PORT || 8080;

// const server = app.listen(port, () => console.log(`App listening on port ${port}!`));
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;

// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// var Datastore = require('nedb')
//     , db = new Datastore();

// app.post(`/v1/data`, async (req, res) => {
//     await db.insert(playlist);
//     await db.insert(playlist2);

//     res.status(201).send();
// });

// app.get(`/v1/data`, (req, res) => {

//     const filter = {};
//     if (req.query.collaborative) {
//         filter.collaborative = req.query.collaborative === 'true';
//     }

//     db.find(filter, (err, data) => {
//         if (err) {
//             res.status(500).send();
//         }
//         res.status(200).json(data);
//     });
// });

// const playlist = {
//     name: 'Minha playlist',
//     description: 'Descrição da minha playlist',
//     public: true,
//     collaborative: false,
//     songs: [
//         {
//             id: 1,
//             name: 'Música 1',
//             duration: 120
//         },
//         {
//             id: 2,
//             name: 'Música 2',
//             duration: 120
//         },
//         {
//             id: 3,
//             name: 'Música 3',
//             duration: 120
//         }
//     ]
// };
// const playlist2 = {
//     name: 'Sua playlist',
//     description: 'Descrição da minha playlist',
//     public: false,
//     collaborative: true,
//     songs: [
//         {
//             id: 1,
//             name: 'Música 1',
//             duration: 120
//         },
//         {
//             id: 2,
//             name: 'Música 2',
//             duration: 120
//         },
//         {
//             id: 3,
//             name: 'Música 3',
//             duration: 120
//         }
//     ]
// };