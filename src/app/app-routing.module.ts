import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'search/:term', component: MoviesComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
