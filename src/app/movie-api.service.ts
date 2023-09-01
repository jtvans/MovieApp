import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiKey = '1e1e9a98';
  public movies: any[] = [];
  public movieById: any = null;

  constructor(private http: HttpClient) {}


  searchMoviesByTitle(title: string) {
    const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}`;
    return this.http.get(url);
  }

  
  getMovieById(id: string) {
    const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`;
    return this.http.get(url);
  }
  
}
