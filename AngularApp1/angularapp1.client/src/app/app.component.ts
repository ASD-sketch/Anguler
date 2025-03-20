import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage: string = 'Me';
  showChild: boolean = true;

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
