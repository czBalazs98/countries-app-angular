import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.scss'],
})
export class CountriesViewComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.searchCountriesByName('');
  }

  searchCountriesByName(name: string) {
    if (name !== '') {
      this.countryService.findCountryByName(name, false).subscribe({
        next: (data) => (this.countries = data),
        error: (_) => (this.countries = []),
      });
    } else {
      this.searchCountriesWithoutFilter();
    }
  }

  searchCountriesByRegion(region: string) {
    if (region !== null) {
      this.countryService.findCountryByRegion(region).subscribe({
        next: (data) => (this.countries = data),
        error: (_) => (this.countries = []),
      });
    } else {
      this.searchCountriesWithoutFilter();
    }
  }

  searchCountriesWithoutFilter() {
    this.countryService
      .findAllCountries()
      .subscribe((data) => (this.countries = data));
  }
}
