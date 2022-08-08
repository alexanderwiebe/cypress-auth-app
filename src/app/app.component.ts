import { Component, VERSION } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  token = "";
  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe((params) => {
      this.token = params["token"];
    });
  }
}
