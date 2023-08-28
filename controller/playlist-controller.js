// const playlistService = require('../model/playlist-service');

// module.exports = function (app) {

//     app.post(`/api/v1/data`, async (req, res) => {
//         db.insert(playlist, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send();
//             }
//             res.status(201).send();
//         });
    
//         // res.status(201).send();
//     });
    

//     app.get('/api/v1/playlists', (req, res) => {
//         playlistService.listAllPlaylists().then((playlists) => {
//             res.status(200).json(playlists);
//         }).catch((err) => {
//             res.status(500).send();
//         });
//     });

//     app.post('/api/v1/playlists', (req, res) => {
//         const requestBody = req.body;

//         const playlist = {
//             nome: requestBody.nome,
//             descricao: requestBody.descricao,
//             musicas: songs = {
//                 id: requestBody.id,
//                 nome: requestBody.nome,
//                 artista: requestBody.artista,
//                 album: requestBody.album,
//                 duracao: requestBody.duracao,
//                 tamanho: requestBody.tamanho,
//                 rota: requestBody.rota,
//             }
//         };

//         playlistService.createPlaylist(playlist).then(() => {
//             res.status(201).send();
//         }).catch((err) => {
//             res.status(500).send();
//         });
//     });

// };  

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