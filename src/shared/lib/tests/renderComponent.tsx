import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18nForTests from "shared/configs/i18n/i18nForTests";
import { StoreProvider } from "@/app/providers/rtk-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";

type RenderComponentOptions = {
  route?: string;
};

export function renderComponent(
  component: ReactNode,
  options: RenderComponentOptions = {},
) {
  const { route = "/" } = options;

  return render(
    <StoreProvider>
      <ThemeProvider>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
        </MemoryRouter>
      </ThemeProvider>
    </StoreProvider>,
  );
}
