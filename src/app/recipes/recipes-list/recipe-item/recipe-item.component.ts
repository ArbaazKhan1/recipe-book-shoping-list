import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  //we are passing void cuz recipe-items' parent class is recipe-list which already know which recipe you have selected
  // @Output() recipeSelected = new EventEmitter<void>(); //Thanks to recipeService we can remove this long chain of outputs and do it all in the service
  @Input() index: number;


}
