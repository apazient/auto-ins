import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./operations";

const initialState = {
  isLoading: false,
  selected: null,
  user: null,
  globalUserData: null,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setGlobalUserData: (state, { payload }) => {
      state.globalUserData = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user = { payload };
      state.isLoading = false;
    });
  },
});

export const { setIsLoading } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
