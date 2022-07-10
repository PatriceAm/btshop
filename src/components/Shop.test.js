import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import Home from "./home/Home";
import Shop from "./shop/Shop";
// import Index from "../index";
import App from "../App";

test("Home page renders content", () => {
  render(<Home />);

  const element = screen.getByText("Welcome to Our Hygiene Store");
  expect(element).toBeDefined();
});
test("Shop page renders content", () => {
  render(<Shop />);

  const element = screen.getByText("Today's offer:");
  expect(element).toBeDefined();
});
