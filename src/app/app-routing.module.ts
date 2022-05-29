import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbzComponent } from './dbz/dbz/dbz.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './pages/contador/contador.component';

const routes: Routes = [
  { path: 'hola', component: ContadorComponent },
  { path: 'heroe', component: HeroeComponent },
  { path: 'dbz', component: DbzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
