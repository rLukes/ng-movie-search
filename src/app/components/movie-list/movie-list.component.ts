import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "./../../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  constructor(private ar: ActivatedRoute, private ms: MovieService) {}

  ngOnInit() {
    this.ar.queryParams.subscribe(qr => {
      this.ms.searchMovies(qr["q"]).subscribe(data => {
        this.movies = data.Search;
      });
    });
  }
}
