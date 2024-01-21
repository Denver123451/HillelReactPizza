import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constans/constants.js";

const initialState = { menuItems: [], isLoading: false, isError: false };

export const getMenuItems = createAsyncThunk(
  "getMenu/getMenuItems",
  async () => {
    try {
      const res = await fetch(`${URL}/menu`);

      if (!res.ok) {
        console.log("error");
        throw new Error("failed to fetch");
      }

      const { data } = await res.json();
      return data;
    } catch (e) {
      console.log(e.message);
      return Promise.reject();
    }
  },
);

const getMenuSlice = createSlice({
  name: "MenuItems",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
      state.menuItems = payload;
      state.isLoading = false;
    });
    builder.addCase(getMenuItems.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default getMenuSlice.reducer;
