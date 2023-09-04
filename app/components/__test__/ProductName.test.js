import React from "react";
import { render, screen } from "@testing-library/react";
import ProductName from "../documents/common/ProductName";
import "@testing-library/jest-dom";

test("ProductName component renders correctly", () => {
  const productName = "iPhone 13 128 GB";
  const textColor = "text-black";

  render(<ProductName productName={productName} textColor={textColor} />);

  const productNameElement = screen.getByText(productName);
  expect(productNameElement).toBeInTheDocument();

  expect(productNameElement).toHaveClass(textColor);
});
