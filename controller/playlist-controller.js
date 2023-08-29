const playlistService = require('../model/playlist-service.js');

module.exports = function (router) {
    router.get('/api/v1/playlists', (req, res) => {
        const data = playlistService.findAllPlaylists();

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).send();
        }
    });

    router.get('/api/v1/playlists/:id/detail', (req, res) => {
        const id = parseInt(req.params.id);
        const data = playlistService.findPlaylistById(id);

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).send();
        }
    });

    router.delete('/api/v1/playlists/:id', (req, res) => {
        const id = parseInt(req.params.id);
        playlistService.deletePlaylistById(id);
        res.status(204).send();
    });

    router.post('/api/v1/playlists', (req, res) => {
        const requestBody = req.body;

        const playlist = {
            nome: requestBody.nome,
            descricao: requestBody.descricao,
        };

        playlistService.createPlaylist(playlist)
        res.status(201).send();
    });

    router.put('/api/v1/playlists/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const idx = playlistService.findPlaylistIndexById(id);

        if (idx === -1) {
            res.status(404).send();
        } else {
            const updatedPlaylist = {
                id: id,
                nome: req.body.nome,
                descricao: req.body.descricao
            };

            playlistService.updatePlaylistByIndex(idx, updatedPlaylist)
            res.status(200).send();
        }
    });

    router.delete('/api/v1/playlists/:id/song/:songId', (req, res) => {
        const id = parseInt(req.params.id);
        const songId = parseInt(req.params.songId);

        playlistService.removeSongFromPlaylistById(id, songId);
        res.status(204).send();
    });

    router.post('/api/v1/playlists/:id/song', (req, res) => {
        const id = parseInt(req.params.id);
        const requestBody = req.body;

        const song = {
            nome: requestBody.nome,
            artista: requestBody.artista,
            album: requestBody.album,
            duracao: requestBody.duracao,
            tamanho: requestBody.tamanho,
            rota: requestBody.rota
        };

        playlistService.addSongToPlaylist(id, song);
        res.status(201).send();
    });
};
