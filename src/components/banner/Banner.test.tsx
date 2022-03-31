import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("renders learn react link", () => {
  const person = { id: "0", name: "coucou", url: "20" };
  render(<Banner key="0" {...person} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
