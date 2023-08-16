import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes:Recipe[] = [
    new Recipe('Recipe', "This is a test recpie", "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg")
  ];
}
