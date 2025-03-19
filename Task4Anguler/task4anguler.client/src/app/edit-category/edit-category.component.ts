import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../serv/category.service';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryId: number = 0;
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
  }

  updateCategory() {
    if (this.categoryName.trim()) {
      this.categoryService.updateCategory(this.categoryId, { name: this.categoryName }).subscribe(() => {
        alert('Category updated successfully!');
        this.router.navigate(['/categories']);
      });
    } else {
      alert('Please enter a valid category name.');
    }
  }
}
