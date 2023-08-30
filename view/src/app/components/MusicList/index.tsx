"use client";

import { useEffect, useMemo, useState } from 'react'
import { Search } from '@mui/icons-material'

import "./style.css"
import axios from 'axios'
import { Song } from '@/app/interfaces/Song';

interface MusicListProps {
    setSong: Function
  }

export default function MusicList({ setSong }: MusicListProps) {
    const [songs, setSongs] = useState<Song[]>([])
    const [search, setSearch] = useState('')

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
                {filteredList.map(song => <li key={song.nome} onClick={() => setSong(song)}>{song.nome}</li>)}                
            </ul>
        </section>
    )
}