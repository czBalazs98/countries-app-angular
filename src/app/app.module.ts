import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CountriesViewComponent } from './countries/components/countries-view/countries-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountriesViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
