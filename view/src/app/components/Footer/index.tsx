'use client'

import { useState } from 'react'

import "./style.css"
import { Song } from '@/app/interfaces/Song';


interface FooterProps {
  song: Song
}

export default function Footer({ song }: FooterProps) {
  const [musicPlaying, setMusicPlaying] = useState(false)

  return (
    <footer className="footer">
      <h3>{song.nome}</h3>
      <audio
        id="song"
        autoPlay
        src={`/${song.nome}.mp3`}
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
        controls
      />
    </footer>
  )
}