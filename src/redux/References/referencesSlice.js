import { createSlice } from "@reduxjs/toolkit";
import { allAutoMakers, allAutoModelByMaker } from "./operations";

const initialState = {
  autoMakers: [],
  autoModelByMaker: [],
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
      });
  },
});

export const referencesReducer = referencesSlice.reducer;
