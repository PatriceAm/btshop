import React from "react";
import {useSelector, useDispatch} from "react-redux";

import BasketLogic from "../BasketLogic/BasketLogic";
import "./Basket.css";

const Basket = () => {
  const inBasket = useSelector((state) => state.inBasket);
  const dispatch = useDispatch();

  return <BasketLogic inBasket={inBasket} dispatch={dispatch} />;
};

export default Basket;
