import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  queryTerm: any;

  constructor(private router: Router) {}

  ngOnInit() {}
  submitHandler(evt: Event) {
    evt.preventDefault();
    this.router.navigate(["/movies"], { queryParams: { q: this.queryTerm } });
  }
}
