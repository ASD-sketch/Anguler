import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  show = false; 
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedColor = ''; 

}
