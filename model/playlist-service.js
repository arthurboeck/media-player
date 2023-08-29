const Song = require('./song-service');

class Playlist {
    constructor(id, nome, descricao, musicas) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.musicas = musicas;
    }
}

const playListData = {
    data: [
        new Playlist(1, 'Minha playlist', 'Descrição da minha playlist', [new Song(1, 'Música 1', 'Artista 1', 'Album 1', 120, 120, 'public/songs/musica1.mp3'), new Song(2, 'Música 2', 'Artista 2', 'Album 2', 120, 120, 'public/songs/musica1.mp3')]),
        new Playlist(2, 'Sua playlist', 'Descrição da sua playlist', [new Song(1, 'Música 1', 'Artista 1', 'Album 1', 120, 120, 'public/songs/musica1.mp3')]),
        new Playlist(3, 'Minha nova playlist', 'Descrição da minha nova playlist', [new Song(2, 'Música 2', 'Artista 2', 'Album 2', 120, 120, 'public/songs/musica2.mp3'), new Song(3, 'Música 3', 'Artista 3', 'Album 3', 120, 120, 'public/songs/musica3.mp3')]),
    ]
};

function findAllPlaylists() {
    return playListData.data;
}

function findPlaylistById(id) {
    return playListData.data.find(p => p.id === id);
}
function findPlaylistIndexById(id) {
    return playListData.data.findIndex(p => p.id === id);
}

function createPlaylist(playlist) {
    const id = playListData.data.length + 1;
    const newPlaylist = new Playlist(id, playlist.nome, playlist.descricao, []);
    playListData.data.push(newPlaylist);
};

function updatePlaylistByIndex(index, newData) {
    const playlist = findPlaylistById(newData.id);
    const playlistAtualizada = new Playlist(playlist.id, newData.nome, newData.descricao, playlist.musicas);
    playListData.data[index] = playlistAtualizada;
};

function deletePlaylistById(id) {
    const index = playListData.data.findIndex(p => p.id === id);
    playListData.data.splice(index, 1);
}

function addSongToPlaylist(idPlaylist, song) {
    const playlist = findPlaylistById(idPlaylist);
    const idSong = playlist.musicas.length + 1;
    const newSong = new Song(idSong, song.nome, song.artista, song.album, song.duracao, song.duracao, song.rota);
    playlist.musicas.push(newSong);
}

function removeSongFromPlaylistById(id, songId) {
    const playlist = findPlaylistById(id);
    const index = playlist.musicas.findIndex(s => s.id === songId);
    playlist.musicas.splice(index, 1);
}

module.exports = { Playlist, findAllPlaylists, findPlaylistById, createPlaylist, updatePlaylistByIndex, deletePlaylistById, addSongToPlaylist, removeSongFromPlaylistById, findPlaylistIndexById };
