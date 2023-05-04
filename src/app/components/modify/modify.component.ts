import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/Interface/pokemon";
import { PokemonService } from "src/app/service/pokemon.service";

@Component({
  selector: "app-modify",
  templateUrl: "./modify.component.html",
  styleUrls: ["./modify.component.scss"],
})
export class ModifyComponent {
  listPokemon$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon>;
  @Input() pokemonId!: number;

  constructor(private readonly pokemonService: PokemonService) {
    this.listPokemon$ = this.pokemonService.getAllPokemons();
    this.pokemon$ = this.pokemonService.getOnePokemons(this.pokemonId);
  }

  ngOnInit(): void {}
}
