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
    console.log("thunkba", basket);
    dispatch(fillBasket(basket));
  };
};

export default basketSlice.reducer;
