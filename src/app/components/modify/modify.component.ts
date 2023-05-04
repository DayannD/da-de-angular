import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable, map } from "rxjs";
import { Pokemon } from "src/app/Interface/pokemon";
import { PokemonService } from "src/app/service/pokemon.service";

@Component({
  selector: "app-modify",
  templateUrl: "./modify.component.html",
  styleUrls: ["./modify.component.scss"],
})
export class ModifyComponent {
  listPokemon$: Observable<Pokemon[]>;
  pokemon$!: Observable<Pokemon>;
  @Output() validate: EventEmitter<void> = new EventEmitter<void>();
  @Input() pokemonId!: number;

  constructor(private readonly pokemonService: PokemonService) {
    this.listPokemon$ = this.pokemonService.getAllPokemons();
  }

  validateEvent() {
    this.validate.emit();
  }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getOnePokemons(this.pokemonId);
    this.pokemon$.subscribe((pokemon) => {
      console.log(pokemon);
    });
  }

  ngOnChanges(): void {
    this.pokemon$ = this.pokemonService.getOnePokemons(this.pokemonId);
  }

  modifyName(event: any) {
    console.log(event.target.value);
    this.pokemon$ = this.pokemon$.pipe(
      map((pokemon) => {
        pokemon.name = event.target.value;
        return pokemon;
      })
    );
  }

  modifyType(event: any) {
    console.log(event.target.value);
    this.pokemon$ = this.pokemon$.pipe(
      map((pokemon) => {
        pokemon.type = event.target.value;
        return pokemon;
      })
    );
  }

  modifyShortDescription(event: any) {
    console.log(event.target.value);
    this.pokemon$ = this.pokemon$.pipe(
      map((pokemon) => {
        pokemon.shortDescription = event.target.value;
        return pokemon;
      })
    );
  }
}
