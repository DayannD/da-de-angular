import { Component, Input } from "@angular/core";
import { CardText } from "src/app/models/card-text";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() cardDetails!: CardText[];
  @Input() col!: boolean;
}
