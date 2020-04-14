import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  @Input() title: string;
  @Input() src: string;
  @Input() name: string;
  @Input() desc: string;

  constructor() {}

  ngOnInit(): void {}
}
