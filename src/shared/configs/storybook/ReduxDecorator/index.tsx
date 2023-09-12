import { StoreProvider } from "@/app/providers/rtk-provider";
import { Story } from "@storybook/react";


export const ReduxDecorator = (Component: Story) => {
  return (
    <StoreProvider>
      <Component />
    </StoreProvider>
  );
};
