import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {
  constructor(private http: HttpClient) {}

  public search(countryCode: string) {
    console.log(countryCode);
    return this.http.get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`);
  }
}
