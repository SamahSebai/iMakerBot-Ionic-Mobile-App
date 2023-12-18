import { TestBed } from '@angular/core/testing';

import { AddBlockService } from './add-block.service';

describe('AddBlockService', () => {
  let service: AddBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
