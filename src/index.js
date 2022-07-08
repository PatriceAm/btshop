import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import inStoreReducer from "./reducers/storeReducer";
import inBasketReducer from "./reducers/basketReducer";
import "./index.css";

const store = configureStore({
  reducer: {
    inStore: inStoreReducer,
    inBasket: inBasketReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
