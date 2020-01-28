import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: any[];
  constructor() {}

  ngOnInit() {
    this.movies = [
      {
        Title: "Star Wars",
        Year: 2018,
        Poster:
          "https://i.pinimg.com/236x/b2/b8/e5/b2b8e5daddd56ccf4d9846994160e915.jpg"
      },
      {
        Title: "Venom",
        Year: 2018,
        Poster:
          "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/inCmCRl_.jpeg"
      }
    ];
  }
}
