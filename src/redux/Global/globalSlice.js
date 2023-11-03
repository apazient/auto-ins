import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  selected: null,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setIsLoading } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
