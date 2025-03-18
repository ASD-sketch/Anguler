// src/app/components/add-category/add-category.component.ts
import { Component } from '@angular/core';
import { CategoryService } from '../serv/category.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryName: string = '';

  constructor(private categoryService: CategoryService) { }

  addCategory() {
    if (this.categoryName.trim()) {
      this.categoryService.addCategory({ name: this.categoryName }).subscribe(() => {
        alert('Category added successfully!');
        this.categoryName = '';
      });
    } else {
      alert('Please enter a category name.');
    }
  }
}
