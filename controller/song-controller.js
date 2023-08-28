// song-routes.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const Song = require('../model/song-service');

const router = express.Router();

// Rota para listar todas as músicas
router.get('/song', (req, res) => {
    const songsDirectory = path.join(__dirname, '../public/songs');
    const songs = [];

    // Lê todos os arquivos na pasta de músicas
    fs.readdirSync(songsDirectory).forEach((file, index) => {
        const filePath = path.join(songsDirectory, file);

        // Crie um objeto Song com informações padrão para cada música
        const song = new Song(
            index + 1,
            `Música ${index + 1}`,
            'Artista Padrão',
            'Álbum Padrão',
            'Tamanho Desconhecido',
            'Duração Desconhecida',
            `/songs/${file}`
        );

        songs.push(song);
    });

    res.status(200).json(songs);
});

// Rota para obter detalhes de uma música com base no ID
router.get('/song/:id/detail', (req, res) => {
    const id = parseInt(req.params.id); // Obtém o ID da URL como um número inteiro

    const songsDirectory = path.join(__dirname, '../public/songs');
    const files = fs.readdirSync(songsDirectory);

    // Verifique se o ID está dentro do intervalo válido (1 a número de músicas)
    if (id >= 1 && id <= files.length) {
        const file = files[id - 1]; // O índice é baseado em zero, então subtraímos 1 do ID

        // Crie um objeto Song com base no arquivo real
        const song = new Song(
            id,
            file, // Nome do arquivo como nome da música
            'Artista Padrão', 
            'Álbum Padrão',  
            'Tamanho Desconhecido', 
            'Duração Desconhecida', 
            `/songs/${file}` // Rota da música relativa à pasta 'public'
        );

        res.status(200).json(song);
    } else {
        res.status(404).json({ error: 'Música não encontrada' });
    }
});

module.exports = router;
