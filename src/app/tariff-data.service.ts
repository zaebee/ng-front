import { Injectable } from '@angular/core';
import { Tariff } from './tariff';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TariffDataService {

  constructor(
    private api: ApiService
  ) { }

  // Simulate GET /tariffs
  getAllTariffs(): Observable<Tariff[]> {
    return this.api.getAllTariffs();
  }

  // Simulate GET /tariffs/:id
  getTariffById(tariffId: number): Observable<Tariff> {
    return this.api.getTariffById(tariffId);
  }
}
