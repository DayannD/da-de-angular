import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritePokemonComponent } from "./favorite-pokemon.component";

const routes: Routes = [
  {
    path: "",
    component: FavoritePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritePokemonRoutingModule {}
