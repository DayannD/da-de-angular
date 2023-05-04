import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "./Interface/pokemon";
import { PokemonService } from "./service/pokemon.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Toto";
  selectPokemon?: Pokemon;
  listPokemon$: Observable<Pokemon[]>;
  listPokemon: Pokemon[] = [];

  constructor(private readonly pokemonService: PokemonService) {
    this.listPokemon$ = this.pokemonService.getAllPokemons();
  }

  ngOnInit() {
    this.pokemonService.getAllPokemons().subscribe((data) => {
      this.listPokemon = data;
    });
  }

  ngAfterViewInit() {
    this.listPokemon$ = this.pokemonService.getAllPokemons();
  }

  removePokemon(id: number) {
    this.listPokemon = this.listPokemon.filter((pokemon) => pokemon.id !== id);
  }

  showPokemon(id: number) {
    this.selectPokemon = this.listPokemon.find((pokemon) => pokemon.id === id);
  }
}
