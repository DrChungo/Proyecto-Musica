import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero/hero";

@Component({
  selector: 'app-principal',
  imports: [Hero],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

}
