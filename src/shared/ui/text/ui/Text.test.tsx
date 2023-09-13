import { render, screen } from "@testing-library/react";
import { TextThemes } from "../types";
import { Text } from "./Text";

describe("Text", () => {
  test("should render correctly", () => {
    render(<Text>Test</Text>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("should add className 'text-primary'", () => {
    render(<Text theme={TextThemes.PRIMARY}>Test</Text>);
    expect(screen.getByText("Test")).toHaveClass("text-primary");
  });

  test("should add className 'text-secondary'", () => {
    render(<Text theme={TextThemes.SECONDARY}>Test</Text>);
    expect(screen.getByText("Test")).toHaveClass("text-secondary");
  });
});
