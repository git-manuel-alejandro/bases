import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../dbz/dbz.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public personajes: Personaje[] = []


  @Input() public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    this.personajes.push(this.nuevo)
    console.log(this.personajes)
    this.nuevo = {
      nombre: '',
      poder: 0
    }


  }







}
