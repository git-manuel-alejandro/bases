import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {



  constructor(
    private jsonplaceholderService: JsonplaceholderService
  ) { }

  ngOnInit(): void {
    this.cargar()
  }

  public data: any = []

  cargar() {
    this.jsonplaceholderService.getPost().subscribe((res) => {

      this.data = res
      console.log(this.data)
    })
  }



}
