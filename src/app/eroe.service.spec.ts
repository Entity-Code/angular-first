import { TestBed } from '@angular/core/testing';

import { EroeService } from './eroe.service';

describe('EroeService', () => {
  let service: EroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
