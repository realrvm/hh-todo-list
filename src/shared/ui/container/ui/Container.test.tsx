import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  test("should add className 'Container'", () => {
    render(<Container>123</Container>);
    expect(screen.getByText("123")).toHaveClass("Container");
  });
});
