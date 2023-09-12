import { FC, useEffect } from "react";

import { useTheme } from "./providers/theme-provider";
import { AppRouter } from "./providers/router-dom-provider";
import { Navbar } from "@/widgets/navbar";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AppRouter />
    </div>
  );
};
