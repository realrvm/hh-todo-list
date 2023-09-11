import { FC, ReactNode, useMemo, useState } from "react";

import { ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/lib/constants";
import { Themes } from "../types";

const ThemeContextProvider = ThemeContext.Provider;

const initialTheme =
  (window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) ||
  Themes.LIGHT;

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderType> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(initialTheme);

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContextProvider value={themeValue}>{children}</ThemeContextProvider>
  );
};
