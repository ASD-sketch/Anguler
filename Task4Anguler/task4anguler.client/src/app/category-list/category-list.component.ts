import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../serv/category.service';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log('Categories received:', data);
      this.categories = data;
    }, error => {
      console.error('Error fetching categories:', error);
    });
  }

  deleteCategory(index: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories.splice(index, 1);
    }
  }
}
