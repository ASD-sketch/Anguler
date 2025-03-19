import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  number = 1234.5678;
  currencyValue = 1234.5;
  percentValue = 0.1234;
}
