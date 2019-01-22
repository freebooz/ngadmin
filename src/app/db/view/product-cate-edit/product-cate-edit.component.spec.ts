import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCateEditComponent } from './product-cate-edit.component';

describe('ProductCateEditComponent', () => {
  let component: ProductCateEditComponent;
  let fixture: ComponentFixture<ProductCateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
