import { LOCAL_STORAGE_THEME_KEY } from "@/shared/lib/constants";
import { Themes } from "../types";
import { useThemeContext } from "./useThemeContext";

type UseThemeResult = {
  theme: Themes;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;

    setTheme(newTheme);

    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
