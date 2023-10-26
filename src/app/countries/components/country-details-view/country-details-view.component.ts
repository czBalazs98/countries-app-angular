import { Component } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../service/country.service';
import { ActivatedRoute } from '@angular/router';
import { getCapitals } from '../../utils/country-utils';

@Component({
  selector: 'app-country-details-view',
  templateUrl: './country-details-view.component.html',
  styleUrls: ['./country-details-view.component.scss'],
})
export class CountryDetailsViewComponent {
  country?: Country;

  borders: string[] = [];

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const countryName = routeParams.get('name');

    this.countryService
      .findCountryByName(countryName!, true)
      .subscribe((data) => {
        this.country = data[0];
        this.findBorders();
      });
  }

  getCapitals() {
    return getCapitals(this.country!);
  }

  getNativeName(): string {
    return Object.values(this.country!.name.nativeName)[0].common;
  }

  getTopLevelDomain(): string {
    if (this.country!.tld !== undefined) {
      return this.country!.tld.join(', ');
    }
    return '';
  }

  getCurrencies(): string {
    if (this.country!.currencies !== undefined) {
      let currencyNames: string[] = [];
      Object.values(this.country!.currencies).forEach((curr) =>
        currencyNames.push(curr.name)
      );
      return currencyNames.join(', ');
    }
    return '';
  }

  getLanguages(): string {
    if (this.country!.languages !== undefined) {
      return Object.values(this.country!.languages).join(', ');
    }
    return '';
  }

  findBorders() {
    this.countryService
      .findCountryNamesByCodes(this.country!.borders)
      .subscribe((data) => (this.borders = data));
  }
}
