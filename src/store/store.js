import {configureStore} from "@reduxjs/toolkit";
import inStoreReducer from "../reducers/storeReducer";
import inBasketReducer from "../reducers/basketReducer";

const store = configureStore({
  reducer: {
    inStore: inStoreReducer,
    inBasket: inBasketReducer,
  },
});

export default store;
