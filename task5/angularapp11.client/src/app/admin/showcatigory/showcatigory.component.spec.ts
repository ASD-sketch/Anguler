import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcatigoryComponent } from './showcatigory.component';

describe('ShowcatigoryComponent', () => {
  let component: ShowcatigoryComponent;
  let fixture: ComponentFixture<ShowcatigoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcatigoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
