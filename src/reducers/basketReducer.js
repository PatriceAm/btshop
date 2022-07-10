import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "inBasket",
  initialState: [],
  reducers: {
    fillBasket(state, action) {
      return action.payload;
    },
  },
});

export const {fillBasket} = basketSlice.actions;

export const fillBasketR = (basket) => {
  return async (dispatch) => {
    dispatch(fillBasket(basket));
  };
};

export const cleanBasketR = (basket) => {
  const updatedBasket = basket.filter((item) => item.qty > 0);
  return async (dispatch) => {
    dispatch(fillBasket(updatedBasket));
  };
};

export default basketSlice.reducer;
