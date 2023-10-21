import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  path:string='recipe';
  loadRecipePage(url:string){
    this.path = url;
  }
  loadShoppingPage(url:string){
    this.path = url;
  }
}
