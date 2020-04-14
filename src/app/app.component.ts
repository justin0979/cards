import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cards = [
    {
      title: "Cheetah Statue",
      src:
        "https://justin0979.github.io/houston-zoo/src/images/edited_cheetahStatue.jpg",
      name: "cheetah",
      desc: "Nice cheetah statue",
    },
    {
      title: "Cobra Statue",
      src:
        "https://justin0979.github.io/houston-zoo/src/images/edited_cobraStatue.jpg",
      name: "cobra",
      desc: "Cobra statue greeter",
    },
    {
      title: "Frog Statue",
      src:
        "https://justin0979.github.io/houston-zoo/src/images/edited_frogStatue.jpg",
      name: "frog",
      desc: "Frog by the bushes",
    },
  ];
}
