export const enum Themes {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
}

export type ThemesContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
