import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Pokemon } from "../Interface/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  favoritePokemon: Pokemon[] = [];
  data = {
    listPokemon: [
      {
        id: 1,
        name: "Bulbizarre",
        type: "Plante",
        shortDescription:
          "Bulbizarre est un Pokémon quadrupède au corps vert et orange",
        longDescription:
          "Bulbizarre est un Pokémon quadrupède au corps vert et orange. Il possède un bulbe sur le dos, qui grandit en même temps que lui. Ce bulbe contient des graines qui poussent en même temps que Bulbizarre. Il possède une queue épaisse et forte, et de petites dents pointues. Ses yeux sont rouges avec des pupilles noires. Ses pieds possèdent trois griffes.",
      },
      {
        id: 2,
        name: "Herbizarre",
        type: "Plante",
        shortDescription:
          "Herbizarre est un Pokémon quadrupède au corps vert et orange",
        longDescription:
          "Herbizarre est un Pokémon quadrupède au corps vert et orange. Il possède un bulbe sur le dos, qui grandit en même temps que lui. Ce bulbe contient des graines qui poussent en même temps que Herbizarre. Il possède une queue épaisse et forte, et de petites dents pointues. Ses yeux sont rouges avec des pupilles noires. Ses pieds possèdent trois griffes.",
      },
      {
        id: 3,
        name: "Florizarre",
        type: "Plante",
        shortDescription:
          "Florizarre est un Pokémon quadrupède au corps vert et orange",
        longDescription:
          "Florizarre est un Pokémon quadrupède au corps vert et orange. Il possède un bulbe sur le dos, qui grandit en même temps que lui. Ce bulbe contient des graines qui poussent en même temps que Florizarre. Il possède une queue épaisse et forte, et de petites dents pointues. Ses yeux sont rouges avec des pupilles noires. Ses pieds possèdent trois griffes.",
      },
      {
        id: 4,
        name: "Florizarre",
        type: "Eau",
        shortDescription:
          "Florizarre est un Pokémon quadrupède au corps vert et orange",
        longDescription:
          "Florizarre est un Pokémon quadrupède au corps vert et orange. Il possède un bulbe sur le dos, qui grandit en même temps que lui. Ce bulbe contient des graines qui poussent en même temps que Florizarre. Il possède une queue épaisse et forte, et de petites dents pointues. Ses yeux sont rouges avec des pupilles noires. Ses pieds possèdent trois griffes.",
      },
    ],
  };

  constructor() {}

  getAllPokemons(): Observable<Pokemon[]> {
    return of(this.data.listPokemon);
  }

  getOnePokemons(id: number): Observable<Pokemon> {
    return of(this.data.listPokemon.find((pokemon) => pokemon.id === id)!);
  }

  addPokemon(id: number) {
    const pokemon = this.data.listPokemon.find((pokemon) => pokemon.id === id);
    this.favoritePokemon.push(pokemon!);
  }

  getAllFavoritePokemons(): Observable<Pokemon[]> {
    return of(this.favoritePokemon);
  }

  removeFavoritePokemon(id: number): Observable<Pokemon[]> {
    this.favoritePokemon = this.favoritePokemon.filter(
      (pokemon) => pokemon.id !== id
    );
    return of(this.favoritePokemon);
  }
}
