import { render, screen } from "@testing-library/react";
import { ButtonThemes } from "../types";
import { Button } from "./Button";

describe("Button", () => {
  test("should render correctly", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("should add className 'primary'", () => {
    render(<Button theme={ButtonThemes.PRIMARY}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("primary");
  });

  test("should add className 'clear'", () => {
    render(<Button theme={ButtonThemes.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });

  test("should add className 'round'", () => {
    render(<Button theme={ButtonThemes.ROUND}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("round");
    //screen.debug();
  });
});
