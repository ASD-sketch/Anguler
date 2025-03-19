// src/app/components/edit-category/edit-category.component.ts
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
  category: any = { name: '', img: '' };

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ جلب بيانات الفئة من API عند تحميل الصفحة
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      data => {
        this.category = data; 
      },
      error => {
        console.error('Error fetching category:', error);
      }
    );
  }

  updateCategory() {
    // ✅ تأكد من أن البيانات محدثة قبل إرسالها إلى API
    this.categoryService.updateCategory(this.categoryId, this.category).subscribe(
      () => {
        alert('Category updated successfully!');
        this.router.navigate(['/categories']); // ✅ توجيه المستخدم بعد التحديث
      },
      error => {
        console.error('Error updating category:', error);
      }
    );
  }
}
