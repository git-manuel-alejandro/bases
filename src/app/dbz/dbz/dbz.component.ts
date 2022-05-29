import { Component, OnInit } from '@angular/core';

export interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1000
    },
    {
      nombre: 'Vegeta',
      poder: 2000
    },
    {
      nombre: 'Trunks',
      poder: 3000
    },
  ]














}
