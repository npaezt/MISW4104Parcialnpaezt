/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarserviceService } from './carservice.service';

describe('Service: Carservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarserviceService]
    });
  });

  it('should ...', inject([CarserviceService], (service: CarserviceService) => {
    expect(service).toBeTruthy();
  }));
});
