import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./Calculator/calculatorSlice";
import { globalReducer } from "./Global/globalSlice";
import { byParametersReducer } from "./byParameters/byParametersSlice";
import { referencesReducer } from "./References/referencesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistInsurer = {
  key: "insurer",
  version: 1,
  storage,
  whitelist: ["paramsFromUrl"],
};

export const store = configureStore({
  reducer: {
    global: persistReducer(persistInsurer, globalReducer),
    calculator: calculatorReducer,
    byParameters: byParametersReducer,
    references: referencesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
