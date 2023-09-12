import ReactDOM from "react-dom/client";

// providers
import { RouterProvider } from "react-router-dom";
import { router } from "./app/providers/router-dom-provider";
import { ThemeProvider } from "./app/providers/theme-provider";
import { StoreProvider } from "./app/providers/rtk-provider";

import "@/shared/configs/i18n/";

import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>,
);
