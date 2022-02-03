import { TestBed } from '@angular/core/testing';

import { LinklistService } from './linklist.service';

describe('LinklistService', () => {
  let service: LinklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
