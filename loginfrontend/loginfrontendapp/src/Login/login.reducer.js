import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLoginUser
} from "./login.action";

const initialState = {
  user : null,
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchLoginUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.user = action.payload;
      })
  },
});

export default slice;

export const { name, reducer, actions } = slice;
