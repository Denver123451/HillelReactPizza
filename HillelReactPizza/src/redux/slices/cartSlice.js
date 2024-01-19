import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      item.qty = item.qty + 1;
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      if (item.qty <= 1) {
        state.items = state.items.filter((item) => item.id !== payload);
      } else {
        item.qty = item.qty - 1;
      }
    },
    deleteCart: (state, { payload }) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decrementQty,
  incrementQty,
  deleteCart,
} = cartSlice.actions;
export default cartSlice.reducer;
