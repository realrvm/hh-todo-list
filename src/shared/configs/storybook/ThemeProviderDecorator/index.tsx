import { ThemeProvider } from "@/app/providers/theme-provider";
import { Story } from "@storybook/react";

export const ThemeProviderDecorator = (Component: Story) => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};
