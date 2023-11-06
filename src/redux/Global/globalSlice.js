import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./operations";

const initialState = {
  isLoading: false,
  isModalErrorOpen: false,
  user: null,
  globalCustomerData: null,
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
    setIsModalErrorOpen: (state, { payload }) => {
      state.isModalErrorOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user = { payload };
      state.isLoading = false;
    });
  },
});

export const { setIsModalErrorOpen, setIsLoading } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
