"use client";

import '@fontsource/roboto';

import { useState } from 'react'

import Footer from './components/Footer';
import MusicList from './components/MusicList';
import { Song } from './interfaces/Song';

export default function Home() {
  const [song, setSong] = useState<Song>({} as Song)

  return (
    <main style={{ background: '#000', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MusicList setSong={setSong}/>
      <Footer song={song}/>
    </main>
  )
}
