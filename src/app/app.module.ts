import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CountriesViewComponent } from './countries/components/countries-view/countries-view.component';
import { FilterBarComponent } from './countries/components/filter-bar/filter-bar.component';
import { CountryCardComponent } from './countries/components/country-card/country-card.component';
import { CountryDetailsViewComponent } from './countries/components/country-details-view/country-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountriesViewComponent,
    FilterBarComponent,
    CountryCardComponent,
    CountryDetailsViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
