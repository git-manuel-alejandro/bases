import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'bases';

  public contador: number = 0
  public base: number = 10

  aumentar(valor: number) {
    this.contador += valor

  }

}
