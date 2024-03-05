import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.southernliving.com/thmb/myqw-RbEUWuUnQvC-yboCxLYpWA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://www.southernliving.com/thmb/myqw-RbEUWuUnQvC-yboCxLYpWA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg')

  ];

  ngOnInit() {
  }

  ngOnDestroy() {
    this.recipeWasSelected.emit(undefined)
  }


  onSelectRecipe(recipe:Recipe ){

    this.recipeWasSelected.emit(recipe)
    }

}
