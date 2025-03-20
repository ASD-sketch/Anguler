import {
  Component, Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedProduct: any;

  selectedColor: any = '';

  today: Date = new Date();

  @Input() inputValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit:');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy:.');
  }

}
