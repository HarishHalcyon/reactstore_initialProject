import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    actionAddToCart(state, action) {
      const { title, price, num } = action.payload;

      const isAlreadythere = state.item.find((x) => x.title === title);
      if (isAlreadythere) {
        const qty = isAlreadythere.quantity + num;
        if (qty === 0) {
          state.item = state.item.filter((x) => x.title !== title);
        } else {
          isAlreadythere.quantity = qty || 1;
          isAlreadythere.total = qty * isAlreadythere.price || 10;
        }
      } else {
        state.item.push({
          title: title,
          quantity: 1,
          total: price,
          price: price,
        });
      }
    },
    actionIncreaseCartby1(state, action) {
      const qty = state.item.quantity + 1;

      state.item.quantity = qty;
      state.item.total = qty * action.payload.price;
    },
    actionDecreaseCartby1(state, action) {
      const qty = state.item.quantity - 1;
      state.item.quantity = qty;
      state.item.total = qty * action.payload.price;
    },
  },
});

export const { actionAddToCart, actionIncreaseCartby1, actionDecreaseCartby1 } =
  cartSlice.actions;

export default cartSlice.reducer;
