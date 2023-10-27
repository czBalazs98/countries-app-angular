import { Component } from '@angular/core';
import { ThemeMode } from './countries/utils/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries-app-angular';

  static theme: ThemeMode = ThemeMode.LightMode;
}
