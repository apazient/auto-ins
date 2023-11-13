import { createSlice } from "@reduxjs/toolkit";
import { allAutoMakers, allAutoModelByMaker, autoByNumber } from "./operations";

const initialState = {
  autoMakers: [],
  autoModelByMaker: [],
  autoByNumber: [],
};

export const referencesSlice = createSlice({
  name: "references",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allAutoMakers.fulfilled, (state, { payload }) => {
        state.autoMakers = payload;
      })
      .addCase(allAutoModelByMaker.fulfilled, (state, { payload }) => {
        state.autoModelByMaker = payload;
      })
      .addCase(autoByNumber.fulfilled, (state, { payload }) => {
        // const { bodyNumber, year, modelText } = payload;
        // state.autoByNumber = [bodyNumber, year, modelText];
        state.autoByNumber = payload;
      });
  },
});

export const referencesReducer = referencesSlice.reducer;
