import { SessionReducerState } from "./interfaces";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: SessionReducerState = {
  pageName: "",
  token: "",
  networkError: false,
  isMenuHidden: false,
};

const persistConfig = {
  key: "session",
  storage,
  blacklist: ["isMenuHidden"],
};

const slice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // Actions relacionadas ao login
    startLogin: (state, { payload }) => ({
      ...state,
    }),
    successLogin: (state, { payload }) => ({
      ...state,
      token: payload?.token,
    }),
    failureLogin: (state) => ({
      ...state,
    }),
    changeNetworkStatus: (state, { payload }) => ({
      ...state,
      networkError: payload,
    }),

    // Actions relacionadas ao logout
    startLogout: (state) => ({
      ...state,
      token: initialState.token,
    }),
    successLogout: () => ({
      ...initialState,
    }),

    // Outras Actions
    toggleMenu: (state) => ({
      ...state,
      isMenuHidden: !state.isMenuHidden,
    }),
    setPageName: (state, { payload }) => ({
      ...state,
      pageName: payload,
    }),
    resetLogin: () => ({
      ...initialState,
    }),
  },
});

export const {
  toggleMenu,
  setPageName,
  startLogin,
  successLogin,
  failureLogin,
  resetLogin,
  changeNetworkStatus,
  startLogout,
  successLogout,
} = slice.actions;

const SessionReducer = persistReducer(persistConfig, slice.reducer);

export default SessionReducer;
