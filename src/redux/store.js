import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./Calculator/calculatorSlice";
import { globalReducer } from "./Global/globalSlice";
import { byParametersReducer } from "./byParameters/byParametersSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    calculator: calculatorReducer,
    byParameters: byParametersReducer,
  },
});
