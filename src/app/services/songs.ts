import { Injectable } from '@angular/core';
import { Song } from '../Models/song';

//Usamos el objeto Song de la carpeta models

@Injectable({
  providedIn: 'root',
})
export class Songs {
  private songs: Song[] = [
        {
      titulo: 'BEAT GOES ON (ORIGINAL MIX)',
      autor: 'Alfonso Padilla',
      youtubeId: 'https://www.youtube.com/watch?v=j-T7iVdMm2U',
    },
  ];
//Funcion que enseña todas las canciones
  getAll(): Song[] {
    return this.songs;
  }
// Funcion que añade una cancion
  add(song: Song) {
    this.songs.push(song);
  }
  //Funcion que elimina una cancion
  removeByYoutube(youtubeId: string) {
  this.songs = this.songs.filter(s => s.youtubeId !== youtubeId);
}

}
