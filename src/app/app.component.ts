import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book-shoping-list';

  //by default load recipe page
  @Input() selectedPage: number = 0;

  onNavigate(page: number) {
   this.selectedPage = page; 
  }
}
