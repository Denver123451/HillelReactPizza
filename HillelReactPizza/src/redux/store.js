import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";
import getMenuReducer from "./slices/getMenuSlice.js";
import userInfoReducer from "./slices/userInfoSlice.js";
import orderDetailsReducer from "./slices/orderDetailsSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    getMenu: getMenuReducer,
    userInfo: userInfoReducer,
    orderDetails: orderDetailsReducer,
  },
});
