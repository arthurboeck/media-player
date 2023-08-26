# media-player
Media player desenvolvido na disciplina de Arquitetura de Software BackEnd - PUCMG

# Rotas

/song - listar todas as musicas
    [
        objeto song,
        objeto song,
    ]

/song/{id}/detail - detalhe da musica
    {
        id: 1,
        nome: 'nome da musica',
        artista: 'nome do artista',
        album: 'nome do album',
        tamanho: 'tamanho da musica',
        duracao: 'duracao da musica',
        rota: 'rota da musica'
    } 

/playlist - listar todas as playlists
/playlist - criar playlists
/playlist/{id}/detail - detalhe das playlists
/playlist/{id}/song - add musica a playlist
/playlist/{id}/song/{id} - remove musica da playlist

https://github.com/louischatriot/nedb/wiki/Creating-loading-the-database