import {Routes, Route} from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import Basket from "./components/summary/Summary";
import SelectedItem from "./components/selectedItem/SelectedItem";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes className="app_container_inner">
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SelectedItem />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default App;
