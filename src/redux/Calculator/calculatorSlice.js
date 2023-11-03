import { createSlice } from "@reduxjs/toolkit";
import { osagoByParams } from "./operations";

const initialState = {
  isLoading: false,
  tariffPolicyChoose: null,
  tariffVcl: null,
};
export const globalSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(osagoByParams.fulfilled, (state, { payload }) => {
      state.tariffPolicyChoose = { payload };
    });
    builder.addCase(osagoByParams.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const calculatorReducer = globalSlice.reducer;
