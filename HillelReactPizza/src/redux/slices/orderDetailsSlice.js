import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newOrder: [],
};

const orderDetailsSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {
    addOrderDetails: (state, { payload }) => {
      state.newOrder = payload;
    },
  },
});

export const { addOrderDetails } = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
