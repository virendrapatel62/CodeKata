import { configureStore } from "@reduxjs/toolkit";
import { APP_PATHS_MANIFEST } from "next/dist/shared/lib/constants";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { marvelSlice } from "./slices/marvelSlice";
import { AppState } from "./types/AppState";

export const store = configureStore({
  reducer: {
    marvels: marvelSlice.reducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

store.subscribe(() => {
  console.log(store.getState());
});
