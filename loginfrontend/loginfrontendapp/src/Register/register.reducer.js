import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRegisterUser
} from "./register.action";

const initialState = {
  user : null,
};

const slice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.user = action.payload;
      })
  },
});

export default slice;

export const { name, reducer, actions } = slice;
