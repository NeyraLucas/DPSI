import { TestBed } from '@angular/core/testing';

import { ExcelCustomService } from './excel-custom.service';

describe('ExcelCustomService', () => {
  let service: ExcelCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
