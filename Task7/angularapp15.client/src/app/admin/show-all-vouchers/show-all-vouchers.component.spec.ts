import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllVouchersComponent } from './show-all-vouchers.component';

describe('ShowAllVouchersComponent', () => {
  let component: ShowAllVouchersComponent;
  let fixture: ComponentFixture<ShowAllVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllVouchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
