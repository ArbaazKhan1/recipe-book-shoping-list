import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {

  //recive recipe form parent class recipes.component
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngreidentToShoppingList(this.recipe.ingredients);
  }
}
