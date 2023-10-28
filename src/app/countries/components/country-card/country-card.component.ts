import { Component, Input } from '@angular/core';
import { Country } from '../../model/country';
import { Router } from '@angular/router';
import { getCapitals } from '../../utils/country-utils';
import { navigateToDetails } from '../../utils/navigation-utils';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input({ required: true })
  country!: Country;

  constructor(private router: Router) {}

  navigateToDetails() {
    navigateToDetails(this.router, this.country.name.common);
  }

  getCapitals() {
    return getCapitals(this.country);
  }
}
