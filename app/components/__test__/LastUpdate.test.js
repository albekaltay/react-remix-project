import React from "react";
import { render, screen } from "@testing-library/react";
import LastUpdate from "../documents/productDetailCard/LastUpdate";
import "@testing-library/jest-dom";

test("LastUpdate component renders correctly", () => {
  const lastUpdate = "Şimdi";

  render(<LastUpdate lastUpdate={lastUpdate} />);

  const expectedText = `Son güncelleme: ${lastUpdate}`;
  const element = screen.getByText(expectedText);

  expect(element).toBeInTheDocument();
});
