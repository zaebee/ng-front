import { Injectable } from '@angular/core';
import { Tariff } from './tariff';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTariffs(): Observable<Tariff[]> {
    return Observable.of([
      new Tariff({ id: 1, name: 'Test', price: 10, download_speed: 100, upload_speed:2, benefits: ['foo', 'bar']})
    ]);
  }

  public createTariff(tariff: Tariff): Observable<Tariff> {
    return Observable.of(
      new Tariff({ id: 1, name: 'Test', price: 10, download_speed: 100, upload_speed:2, benefits: ['foo', 'bar']})
    );
  }

  public getTariffById(tariffId: number): Observable<Tariff> {
    return Observable.of(
      new Tariff({ id: 1, name: 'Test', price: 10, download_speed: 100, upload_speed:2, benefits: ['foo', 'bar']})
    );
  }

  public updateTariff(tariff: Tariff): Observable<Tariff> {
    return Observable.of(
      new Tariff({ id: 1, name: 'Test', price: 10, download_speed: 100, upload_speed:2, benefits: ['foo', 'bar']})
    );
  }

  public deleteTariffById(tariffId: number): Observable<null> {
    return null;
  }
}
