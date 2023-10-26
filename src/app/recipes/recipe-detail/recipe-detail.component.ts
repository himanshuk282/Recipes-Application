import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe:Recipe;
  recipeId:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.route.params
      .subscribe((params:Params)=>{
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      });
  }
  moveToCart(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
    
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
