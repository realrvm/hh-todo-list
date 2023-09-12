import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Component: Story) => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
