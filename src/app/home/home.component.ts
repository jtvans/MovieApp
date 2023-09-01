import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies = ['Avatar', 'One Piece','Avengers: Endgame', 'Guardians of the Galaxy Vol. 3'];
  movieData: any[] = [];

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.movies.forEach(movieTitle => {
      this.movieApiService.searchMoviesByTitle(movieTitle)
        .subscribe((data: any) => {
          this.movieData.push(data.Search[0]);
        });
    });
  }
}

