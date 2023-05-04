import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/Interface/pokemon";
import { PokemonService } from "src/app/service/pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.scss"],
})
export class ListPokemonComponent {
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
