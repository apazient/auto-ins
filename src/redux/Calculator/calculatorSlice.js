import { createSlice } from "@reduxjs/toolkit";
import { osagoByDn, osagoByParams } from "./operations";

const initialState = {
  tariffPolicyChoose: null,
  tariffVcl: null,
};

export const globalSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(osagoByParams.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(osagoByDn.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      });
  },
});

export const calculatorReducer = globalSlice.reducer;
