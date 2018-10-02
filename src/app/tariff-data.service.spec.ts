import { TestBed } from '@angular/core/testing';

import { TariffDataService } from './tariff-data.service';

describe('TariffDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TariffDataService = TestBed.get(TariffDataService);
    expect(service).toBeTruthy();
  });
});
