import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private httpClient: HttpClient) {}

  findAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${environment.apiUrl}/all`);
  }

  findCountryByName(name: string, fullText: boolean): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `${environment.apiUrl}/name/${name}?fullText=${fullText}`
    );
  }

  findCountryByRegion(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `${environment.apiUrl}/region/${region}`
    );
  }

  findCountryNamesByCodes(codes: string[]): Observable<string[]> {
    return this.httpClient
      .get<Country[]>(`${environment.apiUrl}/alpha?codes=${codes}`)
      .pipe(
        map((countries) => countries.map((country) => country.name.common))
      );
  }
}
