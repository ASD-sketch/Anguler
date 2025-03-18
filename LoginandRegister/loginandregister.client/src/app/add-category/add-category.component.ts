import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private ser: CategoryService) { }

  ngOnInit() {
   
  }

  addCategory(data: any) {
    this.ser.AddCategoty(data).subscribe(() => {
      alert("Done");
    });
  }
}
