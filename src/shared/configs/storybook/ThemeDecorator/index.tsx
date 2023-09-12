import { Themes } from "@/app/providers/theme-provider";
import { Story } from "@storybook/react";

export const ThemeDecorator = (theme: Themes) => {
  return (StoryComponent: Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
};
