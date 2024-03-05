import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeprecatedGuard} from "@angular/router";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent  implements OnInit{

  @Input() recipe!: Recipe;
  @Output()selectRecipe = new EventEmitter<void>()
  constructor() {
  }
  ngOnInit() {
  }

  onSelectRecipe(){
    this.selectRecipe.emit()
  }
}
