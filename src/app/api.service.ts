import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBicis(): Promise<any> {
    return this.httpClient.get<any>('https://openapi.emtmadrid.es/v1/transport/bicimad/stations/')
      .toPromise();
  }

}
