import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "../ui/Badge";
import "@testing-library/jest-dom";

test("Badge component renders correctly", () => {
  const badgeText = "Badge";

  render(<Badge>{badgeText}</Badge>);

  const element = screen.getByText(badgeText);

  expect(element).toBeInTheDocument();
});
