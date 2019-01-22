import { TestBed } from '@angular/core/testing';

import { OrganService } from './organ.service';

describe('OrganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganService = TestBed.get(OrganService);
    expect(service).toBeTruthy();
  });
});
