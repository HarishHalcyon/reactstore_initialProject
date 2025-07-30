import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../reducers/shoppingReducer";
export const store = configureStore({
  reducer: {
    shoppingReducer: shoppingReducer,
  },
});
