import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { AppLink } from "./AppLink";
import { renderComponent } from "@/shared/lib/tests/renderComponent";

describe("AppLink", () => {
  test("should link", () => {
    renderComponent(<AppLink to="/test">Test</AppLink>);
    expect(screen.getByText(/test/i)).toBeInTheDocument;
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });

  test("should navigate to correct page", async () => {
    const WrongPage = () => {
      return (
        <div>
          <h1>Wrong Page</h1>
          <AppLink to="../correct-page">To Correct Page</AppLink>
        </div>
      );
    };
    render(
      <MemoryRouter initialEntries={["/wrong-page"]}>
        <Routes>
          <Route path="/wrong-page" element={<WrongPage />} />
          <Route path="/correct-page" element={<h1>Correct Page</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    userEvent.click(screen.getByRole("link", { name: "To Correct Page" }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Correct Page" }),
      ).toBeInTheDocument();
    });
  });
});
