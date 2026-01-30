import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Song } from '../../Models/song';
import { Songs } from '../../services/songs';

@Component({
  selector: 'app-add-song-form',
  imports: [FormsModule],
  templateUrl: './add-song-form.html',
  styleUrl: './add-song-form.css',
})
// Componente que permite añadir una canción validando los datos y guardándola mediante el servicio
export class AddSongForm {
  titulo: string = '';
  autor: string = '';
  youtubeLink: string = '';
  error: string = '';
  // Comprueba de el enlace
  isYoutubeLink(url: string): boolean {
    return url.includes('youtube.com/watch?v=') || url.includes('youtu.be/');
  }

  // usamos el servicio para guardar canciones
  constructor(private songsService: Songs) {}

  // Valida el formulario y añade la canción a la lista
  addSong() {
    this.error = '';

    if (!this.titulo || !this.autor || !this.youtubeLink) {
      this.error = 'Rellena todos los campos';
      return;
    }

    if (!this.isYoutubeLink(this.youtubeLink)) {
      this.error = 'El link debe ser de YouTube';
      return;
    }
    const song: Song = {
      titulo: this.titulo.trim(),
      autor: this.autor.trim(),
      youtubeId: this.youtubeLink.trim(),
    };

    this.songsService.add(song);

    // Limpia el formulario tras añadir la canción
    this.titulo = '';
    this.autor = '';
    this.youtubeLink = '';
  }
}
