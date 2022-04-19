import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcheckComponent } from './productcheck.component';

describe('ProductcheckComponent', () => {
  let component: ProductcheckComponent;
  let fixture: ComponentFixture<ProductcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductcheckComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
