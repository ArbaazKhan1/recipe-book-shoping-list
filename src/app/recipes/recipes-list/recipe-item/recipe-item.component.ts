import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  //we are passing void cuz recipe-items' parent class is recipe-list which already know which recipe you have selected
  @Output() recipeSelected = new EventEmitter<void>();


  onSelected() {
    //we are emmiting this onClick event to its parent class recipe-list
    this.recipeSelected.emit();
  }
}
