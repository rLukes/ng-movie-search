import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  //http://www.omdbapi.com/?i=tt3896198&apikey=badb5253
  private baseUrl: string = "http://www.omdbapi.com/?apikey=badb5253";

  constructor(private http: HttpClient) {}

  searchMovies(qr: string): Observable<any> {
    return this.http.get(this.baseUrl, { params: { s: qr } });
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(this.baseUrl, { params: { i: imdbID } });
  }
}
