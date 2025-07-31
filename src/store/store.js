import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../reducers/shoppingReducer";
import cartReducer from "../reducers/cartReducer";

export const store = configureStore({
  reducer: {
    shoppingReducer: shoppingReducer,
    cartReducer: cartReducer,

  },
});
