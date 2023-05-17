import { TestBed } from '@angular/core/testing';

import { PersonalAsignadoService } from './personal-asignado.service';

describe('PersonalAsignadoService', () => {
  let service: PersonalAsignadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalAsignadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
