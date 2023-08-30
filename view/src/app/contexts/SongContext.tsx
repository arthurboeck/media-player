import { createContext } from 'react';
import { Song } from '../interfaces/Song';

interface SongContextProps {
  songName: Song;
  setSongName: (song: Song) => void;
}

export const SongContext = createContext<SongContextProps>({
  songName: {} as Song,
  setSongName: () => {},
});