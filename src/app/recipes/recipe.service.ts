import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  //Add observable to be able to update recipe list 
  recipesChanged = new Subject<Recipe[]>();
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

    //Don't need this because we implemented routing
    // recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
      //slice makes it so we return a copy of the recipes array and not the original array
      return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addIngreidentToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients)
    }

    addRecipe(recpie: Recipe) {
      this.recipes.push(recpie);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      // splice allows us to start at a specific point (i.e. at the index) and then splice 1 element, thus removing it
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }
}