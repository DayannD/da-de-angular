import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritePokemonComponent } from "./module/favorite-pokemon/favorite-pokemon.component";
import { ListPokemonComponent } from "./module/list-pokemon/list-pokemon.component";

const routes: Routes = [
  {
    path: "",
    component: ListPokemonComponent,
  },
  {
    path: "favoris",
    component: FavoritePokemonComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
