import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public heroes: string[] = ['superman', 'thor', 'ironmaiden', 'hulk']
  public heroeBorrado: string = ''

  borrar() {
    this.heroeBorrado = this.heroes.pop() || ''
  }

}
