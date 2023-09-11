import { createContext} from "react";
import { ThemesContextType } from "../types";

export const ThemeContext = createContext<ThemesContextType | null>(null);
