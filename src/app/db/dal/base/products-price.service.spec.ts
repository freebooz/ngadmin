import { TestBed } from '@angular/core/testing';

import { ProductsPriceService } from './products-price.service';

describe('ProductsPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsPriceService = TestBed.get(ProductsPriceService);
    expect(service).toBeTruthy();
  });
});
