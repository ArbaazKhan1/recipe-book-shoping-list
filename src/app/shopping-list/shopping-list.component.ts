import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private subcription: Subscription;  //always set your observaiables to a variable

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    //load ingredients array
    this.ingredients = this.slService.getIngredients();

    //update ingredients whenever a new ingredient is added
    this.subcription = this.slService.ingredientChanged.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe(); //Always unSub ur observables
  }

}
