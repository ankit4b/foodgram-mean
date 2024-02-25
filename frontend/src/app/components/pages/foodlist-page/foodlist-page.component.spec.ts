import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlistPageComponent } from './foodlist-page.component';

describe('FoodlistPageComponent', () => {
  let component: FoodlistPageComponent;
  let fixture: ComponentFixture<FoodlistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodlistPageComponent]
    });
    fixture = TestBed.createComponent(FoodlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
