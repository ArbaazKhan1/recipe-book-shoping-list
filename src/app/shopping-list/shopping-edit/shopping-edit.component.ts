import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {  
  
  constructor(private slService: ShoppingListService) {}

  //we want to emmit an event where we pass this data to the parent component(shopping-list)
  onAddItem(form: NgForm) {
    const val = form.value;
    const ingredient = new Ingredient(val.name, val.amount);

    this.slService.addIngredient(ingredient);
  }
}
