import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: shoppingcart,
  initialState: {
    showCart : false;
  },
  reducers:{
    actiontogglecart(state,action) =>
    {
        state.showCart = !state.showCart
    }
  }
});

export const {actiontogglecart} =  cartSlice.actions;

export default cartSlice.reducers;
