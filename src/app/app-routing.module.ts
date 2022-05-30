import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbzComponent } from './dbz/dbz/dbz.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { GifComponent } from './pages/gif/gif.component';
import { JsonplaceholderComponent } from './pages/jsonplaceholder/jsonplaceholder.component';

const routes: Routes = [
  { path: 'hola', component: ContadorComponent },
  { path: 'heroe', component: HeroeComponent },
  { path: 'dbz', component: DbzComponent },
  { path: 'gif', component: GifComponent },
  { path: 'jsonplaceholder', component: JsonplaceholderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
