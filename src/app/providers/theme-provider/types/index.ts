export const enum Themes {
  LIGHT = "light_theme",
  DARK = "dark_theme",
}

export type ThemesContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
