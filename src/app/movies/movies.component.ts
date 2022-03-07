import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MOVIES from '../dataMovies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const term = Number(this.route.snapshot.paramMap.get('term'));
    if(term != 0){
      let temp:any = this.movies.filter(elem => elem.genre_ids.find(e => e == term));
      this.movies = temp;
    }
  }

}
