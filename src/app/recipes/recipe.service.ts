import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes:Recipe[] = [
        new Recipe(
          'Recipe', 
          "This is a test recpie",
           "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg",
            [
              new Ingredient('Tomato', 4),
              new Ingredient('Cucumber', 4),
              new Ingredient('Carrot', 1)
            ]),
        new Recipe(
          'Recipe 2',
          "This is test recpie 2", 
          "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg",
           [
              new Ingredient('Meat', 4),
              new Ingredient('Milk', 4),
              new Ingredient('Bread', 1)
           ])
      ];

      recipeSelected = new EventEmitter<Recipe>();

      constructor(private slService: ShoppingListService) {}
      
      getRecipes() {
        //slice makes it so we return a copy of the recipes array and not the original array
        return this.recipes.slice();
      }

      addIngreidentToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }
}