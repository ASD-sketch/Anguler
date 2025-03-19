import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: any = { name: '', img: '' };
  categoryId: number = 0;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.params['id']);
    this.loadCategory();
  }

  loadCategory() {
    this.service.getCategoryById(this.categoryId).subscribe(
      (data) => {
        if (data) {
          this.category = { ...data };
        }
      },
      (error) => {
        console.error('Error loading category:', error);
      }
    );
  }

  updateCategory() {
    this.service.updateCategory(this.categoryId, this.category).subscribe(
      () => {
        alert('Category updated successfully!');
        this.router.navigate(['/dashborde/showcategory']);
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }
}
