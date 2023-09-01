import { Component } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = ''; // Titulo
  searchId: string = ''; // ID

  constructor(public movieApiService: MovieApiService) {}

  searchMovies() {
    if (this.searchQuery.trim() === '' && this.searchId.trim() === '') {
      return;
    }
  
    if (this.searchId.trim() !== '') {
      // Buscar ID
      this.movieApiService.getMovieById(this.searchId)
        .subscribe((data: any) => {
          this.movieApiService.movieById = data;
          this.movieApiService.movies = [];
        });
    } else {
      // Buscar título
      this.movieApiService.searchMoviesByTitle(this.searchQuery)
        .subscribe((data: any) => {
          this.movieApiService.movies = data.Search;
          this.movieApiService.movieById = null;
        });
    }
  }
}

/*
searchMovies() {
  if (this.searchQuery.trim() === '' && this.searchId.trim() === '') {
    return;
  }

  if (this.searchId.trim() !== '') {
    this.movieApiService.getMovieById(this.searchId)
      .subscribe((data: any) => {
        this.movieApiService.movieById = data;
        this.movieApiService.movies = []; 
      });
  } else {
    this.movieApiService.searchMoviesByTitle(this.searchQuery)
      .subscribe((data: any) => {
        this.movieApiService.movies = data.Search || [];
        this.movieApiService.movieById = null; 
      });
  }
}
*/