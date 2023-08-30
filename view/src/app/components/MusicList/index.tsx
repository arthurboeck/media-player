"use client";

import { useContext, useEffect, useMemo, useState } from 'react'
import { CheckBox, Search } from '@mui/icons-material'

import "./style.css"
import axios from 'axios'
import { Song } from '@/app/interfaces/Song';
import { PlayCircle, StopCircle, Add } from '@mui/icons-material';
import { SongContext } from '@/app/contexts/SongContext';
import { Playlist } from '@/app/interfaces/Playlist';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Input, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '40vh',
    display: 'inline-grid'
  };
interface MusicListProps {
    setSong: Function
  }

export default function MusicList({ setSong }: MusicListProps) {
    const [songs, setSongs] = useState<Song[]>([])
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const [search, setSearch] = useState('')
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>({} as Playlist);
    const [isOpenModal, setOpenModal] = useState(false);
    const { songName } = useContext(SongContext);
    const [playlistName, setPlaylistName] = useState('')
    const [playlistDescription, setPlaylistDescription] = useState('')
    const [playlistSongs, setPlaylistSongs] = useState<Song[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const song = {
            nome: event.target.name,
        } as Song;
        if (event.target.checked) {
            setPlaylistSongs([...playlistSongs, song])
        }
        else {
            setPlaylistSongs(playlistSongs.filter(playlistSong => playlistSong.nome !== song.nome))
        }
    };

    const submitPlaylist = async () => {
        setOpenModal(!isOpenModal);
        const res = await axios.post('http://localhost:8080/api/v1/playlists', {
            nome: playlistName,
            descricao: playlistDescription,
            musicas: playlistSongs
        })
        if (res.status === 200) {
            setPlaylistName('');
            setPlaylistDescription('');
            setPlaylistSongs([]);            
            setPlaylists([...playlists, res.data])
        }
    } 


    useEffect(() => {
        const getSongs = async () => {
            const res = await axios.get<Song[]>('http://localhost:8080/song')
            setSongs(res.data)
        }
        const getPlaylists = async () => {
            const res = await axios.get<Playlist[]>('http://localhost:8080/api/v1/playlists')
            setPlaylists(res.data);
        }

        getSongs()
        getPlaylists();
    }, [])
 
    const filteredList = (selectedPlaylist?.musicas || songs).filter(song => song.nome.toLowerCase().includes(search.toLowerCase()));

    return (
        <section className='music-section'>
            <div className='music-actions'>
                <div className='search'>
                    <input placeholder='Digite o nome da música' onChange={e => setSearch(e.target.value)}/>
                    <Search htmlColor='#fff' />
                </div>
                <Button className="add-playlist" variant="contained" color="success" onClick={() => setOpenModal(!isOpenModal)}>
                    <Add htmlColor='#fff' />
                    Criar playlist
                </Button>
            </div>
            <Modal
                open={isOpenModal}
                onClose={() => setOpenModal(!isOpenModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <h2 id="modal-modal-title">Criar playlist</h2>
                    <Input type="text"
                        name=""
                        id=""
                        value={playlistName}
                        placeholder='Nome playlist'
                        onChange={(e) => setPlaylistName(e.target.value)}
                    />
                    <Input type="text"
                        name=""
                        id=""
                        value={playlistDescription}
                        placeholder='Descrição playlist'
                        onChange={(e) => setPlaylistDescription(e.target.value)}
                    />
                    <FormGroup className='playlist-checklist'>
                        {songs.map(song => (
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name={song.nome}/>}
                                label={song.nome}
                                key={song.nome}
                            />
                        ))}
                    </FormGroup>
                    <Button className="save-playlist" variant="contained" color="success" onClick={() => submitPlaylist()}>
                        Salvar playlist
                    </Button>
                </Box>
            </Modal>

            <div className='playlists'>
                <h2>Playlists</h2>
                <ul className='playlist'>
                    <li onClick={() => setSelectedPlaylist({} as Playlist)}>
                        Todas as músicas
                    </li>
                    {playlists
                        .map(playlist => (
                            <li key={playlist.nome}
                                onClick={() => setSelectedPlaylist(playlist)}
                            >
                                {playlist.nome}
                            </li>
                        ))}
                </ul>
            </div>

            <ul className='list'>
                {filteredList
                    .map(song => (
                        <li key={song.nome} 
                            onClick={() => songName?.nome !== song.nome?  setSong(song) : setSong()}>
                            {songName?.nome === song.nome ? (
                                <StopCircle htmlColor='#fff' />
                            ) : (
                                <PlayCircle htmlColor='#fff' />
                            )}
                            {song.nome}
                        </li>
                    ))}                
            </ul>
        </section>
    )
}