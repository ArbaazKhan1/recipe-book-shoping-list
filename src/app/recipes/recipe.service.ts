import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes:Recipe[] = [
        new Recipe('Recipe', "This is a test recpie", "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg")
      ];

      getRecipes() {
        //slice makes it so we return a copy of the recipes array and not the original array
        return this.recipes.slice();
      }
}