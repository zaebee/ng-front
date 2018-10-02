import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

import { TariffDataService } from './tariff-data.service';

describe('TariffDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TariffDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TariffDataService], (service: TariffDataService) => {
    expect(service).toBeTruthy();
  }));

});
