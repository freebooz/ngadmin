import { TestBed } from '@angular/core/testing';

import { ProductsCateService } from './products-cate.service';

describe('ProductsCateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsCateService = TestBed.get(ProductsCateService);
    expect(service).toBeTruthy();
  });
});
