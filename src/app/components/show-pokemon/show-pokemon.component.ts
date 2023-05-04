import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "src/app/Interface/pokemon";

@Component({
  selector: "app-show-pokemon",
  templateUrl: "./show-pokemon.component.html",
  styleUrls: ["./show-pokemon.component.scss"],
})
export class ShowPokemonComponent {
  @Input() pokemon!: Pokemon[];
  @Output() removeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() showEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  removePokemon(id: number) {
    this.removeEvent.emit(id);
  }

  showPokemon(id: number) {
    this.showEvent.emit(id);
  }
}
