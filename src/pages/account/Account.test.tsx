import React from "react";
import { render, screen } from "@testing-library/react";
import Account from "./Account";

test("renders learn react link", () => {
  render(<Account />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
