import { Component } from '@angular/core';
import { HeroVideo } from "../hero-video/hero-video";
import { HeroActions } from "../hero-actions/hero-actions";

@Component({
  selector: 'app-hero',
  imports: [HeroVideo, HeroActions],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
