export interface Theme {
  mode: ThemeMode;
  imageSrc: string;
  imageAlt: string;
}

export enum ThemeMode {
  LightMode = 'Light mode',
  DarkMode = 'Dark mode',
}

export const darkTheme: Theme = {
  mode: ThemeMode.DarkMode,
  imageSrc: '../../../../assets/img/moon-regular.svg',
  imageAlt: 'Dark mode icon',
};

export const lightTheme: Theme = {
  mode: ThemeMode.LightMode,
  imageSrc: '../../../../assets/img/sun-regular.svg',
  imageAlt: 'Light mode icon',
};
