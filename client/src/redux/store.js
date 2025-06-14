import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";

const rootReducer = combineReducers({
  navbar: navbarReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
