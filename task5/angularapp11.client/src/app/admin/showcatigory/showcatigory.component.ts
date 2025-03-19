import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcatigory',
  templateUrl: './showcatigory.component.html',
  styleUrls: ['./showcatigory.component.css']
})
export class ShowcatigoryComponent {
  categories: any = [];

  constructor(private _myser: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getCategories().subscribe(
      (data) => {
        console.log("✅ All categories:", data);
        this.categories = data;
      },
      (error) => {
        console.error("❌ Error fetching categories:", error);
      }
    );
  }

  editCategory(categoryId: number) {
    this.router.navigate(['/dashborde/editCategory', categoryId]);
  }
}
