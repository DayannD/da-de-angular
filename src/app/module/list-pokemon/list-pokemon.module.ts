import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppModule } from "src/app/app.module";
import { ListPokemonRoutingModule } from "./list-pokemon-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AppModule, ListPokemonRoutingModule],
  exports: [],
})
export class ListPokemonModule {}
