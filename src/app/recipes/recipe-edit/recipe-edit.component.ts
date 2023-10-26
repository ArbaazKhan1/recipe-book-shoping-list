import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; //if we get an id then we should be in edit mode
        // call initForm when ever route params change, cuz that means we have reloaded the page
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescrip = '';
    let recipeIngredients = new FormArray([]);


    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescrip = recipe.description;
      if(recipe['ingredients']) {
        // loop thru all ingredients in recipe and add them to recipeIngredients
        for(let ing of recipe.ingredients) {
          recipeIngredients.push(
            // We use form group cuz we have to form controls, name & amount
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }


    this.recipeForm = new FormGroup({
      // we dont execute the method required (i.e. () ), we just want a referance to it
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescrip, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIng(index: number) {
    // Get the specific recipe ingredients from FormArrays and remove the ingredient at index
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    // ***  *** THis is the format of a recipe form which should be the same as a recipe
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imgPath'],   
      this.recipeForm.value['ingredients']);

    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
    console.log(this.recipeForm);
  }

  get Controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
