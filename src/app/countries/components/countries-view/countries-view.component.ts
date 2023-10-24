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
    this.searchCountries('');
  }

  searchCountries(name: string) {
    if (name !== '') {
      this.countryService
        .findCountryByName(name)
        .subscribe((data) => (this.countries = data));
    } else {
      this.countryService
        .findAllCountries()
        .subscribe((data) => (this.countries = data));
    }
  }
}
