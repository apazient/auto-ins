import { createSlice } from "@reduxjs/toolkit";
import {
  autoByNumber,
  chooseVclTariffDGO,
  osagoByDn,
  osagoByParams,
} from "./operations";

const initialState = {
  tariffPolicyChoose: null,
  tariffVcl: null,
  autoByNumber: [],
  stateNumber: "",
};

export const globalSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setStateNumber: (state, { payload }) => {
      state.stateNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(osagoByParams.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(osagoByDn.fulfilled, (state, { payload }) => {
        state.tariffPolicyChoose = payload;
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        state.autoByNumber = payload;
      })
      .addCase(chooseVclTariffDGO.fulfilled, (state, { payload }) => {
        state.tariffVcl = payload;
      });
  },
});

export const { setStateNumber } = globalSlice.actions;
export const calculatorReducer = globalSlice.reducer;
