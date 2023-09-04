import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../loadings/Loading";
import "@testing-library/jest-dom";

test("Loading component renders correctly", () => {
  render(<Loading />);

  const element = screen.getByText("Loading...");

  expect(element).toBeInTheDocument();
});
