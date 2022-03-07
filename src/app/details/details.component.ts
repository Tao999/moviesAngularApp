import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MOVIES from '../dataMovies';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movies = MOVIES;
  post:any;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = (this.movies.find(elem => elem.id == id));
  }

}
