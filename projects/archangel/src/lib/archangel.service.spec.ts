import { TestBed } from '@angular/core/testing';

import { ArchangelService } from './archangel.service';

describe('ArchangelService', () => {
  let service: ArchangelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchangelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
