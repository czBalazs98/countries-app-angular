import { Router } from '@angular/router';

export function navigateToDetails(router: Router, countryName: string) {
  router.navigate(['countries', countryName]);
}
