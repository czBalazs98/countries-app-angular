import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesViewComponent } from './countries/components/countries-view/countries-view.component';
import { CountryDetailsViewComponent } from './countries/components/country-details-view/country-details-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesViewComponent },
  { path: 'countries/:name', component: CountryDetailsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
