import { TestBed } from '@angular/core/testing';

import { PageServicioService } from './page-servicio.service';

describe('PageServicioService', () => {
  let service: PageServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
