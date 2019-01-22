import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCateListComponent } from './product-cate-list.component';

describe('ProductCateListComponent', () => {
  let component: ProductCateListComponent;
  let fixture: ComponentFixture<ProductCateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
