import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    addItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItemInCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
