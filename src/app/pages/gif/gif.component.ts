import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { GiphyInterface } from '../../interfaces/gif.interface';


@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  constructor(
    private giphyService: GiphyService

  ) { }

  ngOnInit() {
    this.buscar()
  }

  public gifs: string[] = []
  public gifshort: string[] = []
  public termino: string = 'goku'
  public personajes: any[] = []

  buscar() {


    if (this.termino.trim() != '') {
      this.gifs.unshift(this.termino)
      this.gifshort = this.gifs.slice(0, 5)
      this.giphyService.buscar(this.termino).subscribe((resp: GiphyInterface) => {

        this.personajes = resp.data

        localStorage.setItem('historial', JSON.stringify(this.gifshort))


      }, (err) => {
        console.log(err)
      })

      this.termino = ''
    }
  }


  recarga(gif: string) {
    this.giphyService.info
    // console.log(gif)
    this.giphyService.buscar(gif).subscribe((resp: GiphyInterface) => {

      this.personajes = resp.data

      localStorage.setItem('historial', JSON.stringify(this.gifshort))


    }, (err) => {
      console.log(err)
    })

  }




}
