import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    
    private recipes:Recipe[]=[
        new Recipe(
            'Butter Chicken',
            'A super-tasty Chicken with Makhani Sauce',
            'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
            [
                new Ingredient('Chicken',1),
                new Ingredient('Makhani Sauce',0.5)
            ]),
        new Recipe(
            'Big Fat Burger',
            '',
            'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Chicken',1)
            ])
      ];
    constructor(private slService:ShoppingListService){}
    getRecipes():Recipe[]{
        //using slice method without parameters to send a copy of recipes array
        return this.recipes.slice();
    }
    getRecipe(index:number):Recipe{
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}