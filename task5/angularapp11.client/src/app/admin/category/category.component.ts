import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {


  constructor(private _ser: ServiceService) { }

  ngOnInit() {

  }

  postData(data: any) {
    this._ser.postNewCategory(data).subscribe(() => {
      alert("add new Product");
    });
  }

}
