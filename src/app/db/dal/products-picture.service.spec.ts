import { TestBed } from '@angular/core/testing';

import { ProductsPictureService } from './products-picture.service';

describe('ProductsPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsPictureService = TestBed.get(ProductsPictureService);
    expect(service).toBeTruthy();
  });
});
