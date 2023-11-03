import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./Global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
