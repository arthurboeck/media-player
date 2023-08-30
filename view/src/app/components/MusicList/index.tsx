"use client";

import { useContext, useEffect, useMemo, useState } from 'react'
import { Search } from '@mui/icons-material'

import "./style.css"
import axios from 'axios'
import { Song } from '@/app/interfaces/Song';
import { PlayCircle, StopCircle } from '@mui/icons-material';
import { SongContext } from '@/app/contexts/SongContext';

interface MusicListProps {
    setSong: Function
  }

export default function MusicList({ setSong }: MusicListProps) {
    const [songs, setSongs] = useState<Song[]>([])
    const [search, setSearch] = useState('')
    const { songName } = useContext(SongContext);

    useEffect(() => {
        const getSongs = async () => {
            const res = await axios.get<Song[]>('http://localhost:8080/song')

            setSongs(res.data)
        }

        getSongs()
    }, [])
 
    const filteredList = useMemo(() => search ? songs.filter(song => song.nome.toLowerCase().includes(search.toLowerCase())) : songs, [search, songs])

    return (
        <section className='music-section'>
            <div className='search'>
                <input placeholder='Digite o nome da música' onChange={e => setSearch(e.target.value)}/>
                <Search htmlColor='#fff' />
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