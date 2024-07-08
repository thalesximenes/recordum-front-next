import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const makeStore = () => {
  return configureStore({ reducer: rootReducer });
};

const store = makeStore();

// Infer the type of the store
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;