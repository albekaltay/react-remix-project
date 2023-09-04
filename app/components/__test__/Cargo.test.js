import React from "react";
import { render, screen } from "@testing-library/react";
import Cargo from "../documents/productDetailCard/Cargo";
import "@testing-library/jest-dom";

test("Cargo component renders correctly", () => {
  render(<Cargo />);

  const element = screen.getByText("Ücretsiz Kargo");

  expect(element).toBeInTheDocument();
});
