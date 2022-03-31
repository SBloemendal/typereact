import React from "react";
import { render, screen } from "@testing-library/react";
import Detail from "./Detail";

test("renders learn react link", () => {
  render(<Detail />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
