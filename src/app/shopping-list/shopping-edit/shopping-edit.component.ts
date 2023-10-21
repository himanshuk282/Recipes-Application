import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static:true}) nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private shoppingListService:ShoppingListService){}

  onAddItem(){
    const inpName = this.nameInputRef.nativeElement.value;
    const inpAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inpName,inpAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
  
}
