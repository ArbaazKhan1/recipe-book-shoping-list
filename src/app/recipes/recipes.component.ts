import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    //We don't need this because rounting is now handling data across recipes 
    //we are reciving the slected recipe from recipe-item.component by using recipeService
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe
    //   }
    // );
  }

  
}
