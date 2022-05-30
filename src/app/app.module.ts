import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './pages/contador/heroes.module';
import { GifComponent } from './pages/gif/gif.component';
import { JsonplaceholderComponent } from './pages/jsonplaceholder/jsonplaceholder.component';


@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    JsonplaceholderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


    FormsModule,
    HeroesModule,
    ContadorModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
