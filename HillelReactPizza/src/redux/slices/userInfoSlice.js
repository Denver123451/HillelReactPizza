import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: localStorage.getItem("userName") || "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserName: (state, { payload }) => {
      state.userName = payload;
      localStorage.setItem("userName", payload);
    },
  },
});

export const { addUserName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
