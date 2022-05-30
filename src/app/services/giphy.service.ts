import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GiphyInterface } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(
    private http: HttpClient
  ) { }



  private data: any = [
    { nombre: 'manuel' },
    { nombre: 'matías' },
    { nombre: 'felipe' },

  ]

  get info() {
    return this.data
  }






  buscar(termino: string) {




    let url = `https://api.giphy.com/v1/gifs/search?api_key=34zn8a8zhmGAKXWSxAyVuFPA4mp7r4FA&q=${termino}&limit=5&offset=0&rating=g&lang=en`
    return this.http.get<GiphyInterface>(url)

  }
}
