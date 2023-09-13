import { screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { Input } from "./Input";

describe("Input", () => {
  test("should render correctly", () => {
    renderComponent(<Input value="test" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  test("should show correct value", () => {
    renderComponent(<Input value="test" onChange={() => {}} />);
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });

  test("should render with label", () => {
    renderComponent(<Input value="test" onChange={() => {}} label="label" />);
    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
