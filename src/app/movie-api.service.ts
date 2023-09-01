import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiKey = '1e1e9a98'; // Reemplaza con tu clave API
  public movies: any[] = [];
  public movieById: any = null; // Agrega la propiedad movieById

  constructor(private http: HttpClient) {}

  // Método para buscar por título
  searchMoviesByTitle(title: string) {
    const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}`;
    return this.http.get(url);
  }

  // Método para buscar por ID
  getMovieById(id: string) {
    const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`;
    return this.http.get(url);
  }
  
}
