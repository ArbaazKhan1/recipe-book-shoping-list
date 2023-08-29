import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    //this is how we will update our ingredient array whenever a new ingrediant is added 
    ingredientChanged = new EventEmitter<Ingredient[]>() ;
    private ingredients:Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
      ];

      addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientChanged.emit(this.getIngredients());
      } 

      addIngredients(ings: Ingredient[]) {
        //... is called the spread operator, it allows us to turn an array of elements to a list of elements 
        this.ingredients.push(...ings);
        this.ingredientChanged.emit(this.getIngredients());
      }
      
      getIngredients() {
        return this.ingredients.slice();
      }
}