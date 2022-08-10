// from https://redux-toolkit.js.org/tutorials/typescript

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./redux/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
