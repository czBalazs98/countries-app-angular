import { Country } from '../model/country';

export function getCapitals(country: Country): string {
  if (country.capital !== undefined) {
    return country.capital.join(', ');
  }
  return '';
}
