"use client";

import '@fontsource/roboto';

import { useState } from 'react'

import Footer from './components/Footer';
import MusicList from './components/MusicList';
import { SongContext } from './contexts/SongContext';
import { Song } from './interfaces/Song';

export default function Home() {
  const [songName, setSongName] = useState<Song>({} as Song)

  return (
    <SongContext.Provider value={{ songName, setSongName }}>
      <main style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <MusicList setSong={setSongName}/>
        <Footer song={songName}/>
      </main>
    </SongContext.Provider>
  )
}
