import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./app/providers/theme-provider";
import { router } from "./app/providers/router-dom-provider";
import { StoreProvider } from "./app/providers/rtk-provider";

import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>,
);
