import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import Navigation from "./components/navigation/Navigation";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Basket from "./components/summary/Summary";
import SelectedItem from "./components/selectedItem/SelectedItem";
import {fillStoreR} from "./reducers/storeReducer";

import "./App.css";
import {useEffect} from "react";

const App = () => {
  const dispatch = useDispatch();
  const initialStore = [
    {
      id: 1,
      name: "ZEWA Toilet Paper",
      price: "0.65",
      image: "/assets/toilet_paper.png",
      type: "roll",
      decription: "Triple layered, perfumed, premium quality toilet paper.",
      discount: "Buy six rolls for £3.25 ",
      withoutDiscount: " (£3.90)",
    },
    {
      id: 2,
      name: "TEMPO Face Mask",
      price: "2.50",
      image: "/assets/face_mask.png",
      type: "each",
      decription: "Pack of 10 medical face masks",
      discount: "Buy 2 for £4 ",
      withoutDiscount: " (£5)",
    },
  ];

  useEffect(() => {
    dispatch(fillStoreR(initialStore));
  });

  return (
    <div>
      <Navigation />
      <Routes className="app_container_inner">
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SelectedItem />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default App;
