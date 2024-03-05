import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ShoppingListComponent } from './components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/RecipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from "./components/RecipeBook/recipe-detail/recipe-detail.component";
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/RecipeBook/recipes/recipes.component';
import {ExercisesModule} from "../exercises/exercises.module";

@NgModule({
  declarations: [
    AppComponent,

    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ExercisesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
