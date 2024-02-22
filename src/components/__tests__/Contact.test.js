import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button in the component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
})

test("Should load input name inside Contact Component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
})

test("Should load 2 input boxes on the contact component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox")
  expect(inputBoxes.length).toBe(2);
})

