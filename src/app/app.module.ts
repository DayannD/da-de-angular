import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CardComponent } from "./components/card/card.component";
import { ContentComponent } from "./components/content/content.component";
import { ModifyComponent } from "./components/modify/modify.component";
import { PokemonDetailsComponent } from "./components/pokemon-details/pokemon-details.component";
import { ShowPokemonComponent } from "./components/show-pokemon/show-pokemon.component";
import { FavoritePokemonComponent } from './module/favorite-pokemon/favorite-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CardComponent,
    ShowPokemonComponent,
    PokemonDetailsComponent,
    ModifyComponent,
    FavoritePokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
