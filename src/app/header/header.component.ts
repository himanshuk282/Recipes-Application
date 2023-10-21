import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent{
    @Output() recipeClick:EventEmitter<string> = new EventEmitter();
    @Output() shoppingClick:EventEmitter<string> = new EventEmitter();
    
    onRecipeClick(){
        this.recipeClick.emit('recipe');
    }
    onShoppingClick(){
        this.shoppingClick.emit('shopping');
    }
}