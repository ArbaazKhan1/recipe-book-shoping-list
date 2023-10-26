import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subcription: Subscription

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    //We get RecipesChanged Observable and update recipe list to the new recipeChanged list from recipeService
    this.subcription = this.recipeService.recipesChanged.subscribe(
      (rec: Recipe[]) => {
       this.recipes = rec; 
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
