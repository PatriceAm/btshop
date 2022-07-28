import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import Navigation from "./components/navigation/Navigation";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Basket from "./components/Basket/Basket";
import SelectedItem from "./components/selectedItem/SelectedItem";

import {fillStoreR} from "./reducers/storeReducer";
import data from "./data.json";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const initialStore = data.initialStore;

  useEffect(() => {
    dispatch(fillStoreR(initialStore));
  }, [dispatch, initialStore]);

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
