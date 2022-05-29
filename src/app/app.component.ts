import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  public contador: number = 0
  public base: number = 10

  aumentar(valor: number) {
    this.contador += valor

  }
}
