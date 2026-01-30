import { Component } from '@angular/core';
import { Songs } from '../../services/songs';
import { Song } from '../../Models/song';

@Component({
  selector: 'app-song-list',
  imports: [],
  templateUrl: './song-list.html',
  styleUrl: './song-list.css',
})
export class SongList {
  constructor(private songsService: Songs) {}


  // Obtiene todas las canciones desde el servicio para mostrarlas en la lista
  get canciones(): Song[] {
    return this.songsService.getAll();
  }

    // Pide confirmación al usuario y elimina la canción seleccionada
  confirmarEliminar(youtube: string) {
    const ok = confirm('¿Seguro que quieres eliminar esta canción?');
    if (!ok) return;

    this.songsService.removeByYoutube(youtube);
  }
}
