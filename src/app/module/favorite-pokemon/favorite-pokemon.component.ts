import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/Interface/pokemon";
import { PokemonService } from "src/app/service/pokemon.service";

@Component({
  selector: "app-favorite-pokemon",
  templateUrl: "./favorite-pokemon.component.html",
  styleUrls: ["./favorite-pokemon.component.scss"],
})
export class FavoritePokemonComponent {
  listFavoritePokemon$: Observable<Pokemon[]>;

  constructor(private readonly pokemonService: PokemonService) {
    this.listFavoritePokemon$ = this.pokemonService.getAllFavoritePokemons();
  }

  ngOnInit() {}

  removeFavoritePokemon(id: number) {
    this.listFavoritePokemon$ = this.pokemonService.removeFavoritePokemon(id);
  }

  showPokemon(id: number) {}
}
