import { configureStore } from "@reduxjs/toolkit";
import portressSlice from "./redux/portress/portress";

export const store = configureStore({
  reducer: {
    portress: portressSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
