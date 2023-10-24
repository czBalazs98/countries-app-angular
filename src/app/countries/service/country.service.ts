import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  findAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.apiUrl}/all`);
  }

  findCountryByName(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.apiUrl}/name/${name}`);
  }
}
