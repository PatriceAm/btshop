import {createSlice} from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "inStore",
  initialState: [],
  reducers: {
    fillStore(state, action) {
      return action.payload;
    },
  },
});

export const {fillStore} = storeSlice.actions;

export const fillStoreR = (initialStore) => {
  return async (dispatch) => {
    dispatch(fillStore(initialStore));
  };
};

export default storeSlice.reducer;
