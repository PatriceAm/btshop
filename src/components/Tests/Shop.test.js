import React from "react";
import {MemoryRouter} from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";

import Home from "../home/Home";
import Today from "../today/Today";
import BasketLogic from "../BasketLogic/BasketLogic";

let inBasket;

describe("Rendering some contents", () => {
  test("Home page renders content", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = screen.getByText("Welcome to Our Hygiene Store");
    expect(element).toBeDefined();
  });

  test("Shop page renders content", () => {
    render(
      <MemoryRouter>
        <Today />
      </MemoryRouter>
    );
    const element = screen.getByText("Today's offer:");
    expect(element).toBeDefined();
  });
});

describe("Discount logic", () => {
  test("Basket Discount Logic for 2 Face Mask", () => {
    inBasket = [
      {
        id: 2,
        price: "2.50",
        name: "TEMPO Face Mask",
        qty: 2,
        discApplyAt: 2,
        discPrice: 2,
      },
    ];
    const {container} = render(
      <MemoryRouter>
        <BasketLogic inBasket={inBasket} />
      </MemoryRouter>
    );

    const faceMaskDiscount = container.querySelector(".discValue");
    expect(faceMaskDiscount).toHaveTextContent("£1.00");
  });

  test("Basket Discount Logic for 6 Toilet Paper", () => {
    inBasket = [
      {
        id: 1,
        price: "0.65",
        name: "ZEWA Toilet Paper",
        qty: 6,
        discApplyAt: 6,
        discPrice: 0.54167,
      },
    ];
    const {container} = render(
      <MemoryRouter>
        <BasketLogic inBasket={inBasket} />
      </MemoryRouter>
    );

    const toiletPaperDiscount = container.querySelector(".discValue");
    expect(toiletPaperDiscount).toHaveTextContent("£0.65");
  });
});
