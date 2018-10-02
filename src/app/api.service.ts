import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

import { Tariff } from './tariff';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  // API: GET /tariffs
  public getAllTariffs(): Observable<Tariff[]> {
    return this.http
      .get(API_URL + '/tariffs')
      .map(response => {
        const tariffs = response.json();
        return tariffs.map((tariff) => new Tariff(tariff));
      })
      .catch(this.handleError);
  }

  // API: GET /tariffs/:id
  public getTariffById(tariffId: number): Observable<Tariff> {
    return this.http
      .get(API_URL + '/tariffs/' + tariffId)
      .map(response => {
        return new Tariff(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
