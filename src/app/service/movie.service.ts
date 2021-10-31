import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2019-01-31&api_key=8bbe4c66108ecc4fa083265d6c3a8b12&primary_release_date.gte=2019-01-01&language=es&include_image_language=es`
    );
  }

}
