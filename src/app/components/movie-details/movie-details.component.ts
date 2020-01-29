import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "./../../services/movie.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  movieDetail: any;
  constructor(private ar: ActivatedRoute, private ms: MovieService) {}

  ngOnInit() {
    this.ar.params.subscribe(params => {
      let movieId = params["imdbID"];

      this.ms.getMovieDetails(movieId).subscribe(resp => {
        this.movieDetail = resp;
      });
    });
  }

  goBack() {
    console.log("fsdfsdljf");
    window.history.back();
  }
}
