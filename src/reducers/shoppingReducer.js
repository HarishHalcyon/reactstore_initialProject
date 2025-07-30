import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "shoppingReducers",
  initialState: {
    showCart: false,
  },
  reducers: {
    actiontogglecart(state, action) {
      state.showCart = !state.showCart;
    },
  },
});

export const { actiontogglecart } = cartSlice.actions;

export default cartSlice.reducer;
