import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() selectedProduct: any;

  selectedColor: any = '';

  today: Date = new Date();

}
