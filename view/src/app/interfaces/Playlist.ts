import { Song } from "./Song";

export interface Playlist {
    nome: string,
    descricao: string,
    id: number,
    musicas: Song[]
}