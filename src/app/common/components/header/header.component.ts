import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Theme, ThemeMode, darkTheme, lightTheme } from 'src/app/countries/utils/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  switchToTheme: Theme = darkTheme;
  
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    if (this.switchToTheme === darkTheme) {
      AppComponent.theme = ThemeMode.DarkMode;
      this.switchToTheme = lightTheme;
    } else {
      AppComponent.theme = ThemeMode.LightMode;
      this.switchToTheme = darkTheme;
    }
  }
}
