import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesViewComponent } from './countries/components/countries-view/countries-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
