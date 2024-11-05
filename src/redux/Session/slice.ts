import { SessionReducerState } from "./interfaces";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: SessionReducerState = {
  backgroundImage: "",
  pageName: "",
  token: "",
  networkError: false,
  loading: false,
};

const persistConfig = {
  key: "session",
  storage,
};

const slice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // Actions relacionadas ao login
    startLogin: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successLogin: (state, { payload }) => ({
      ...state,
      token: payload?.token,
      loading: false,
    }),

    failureLogin: (state) => ({
      ...state,
      loading: false,
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

    setBackgroundImage: (state, { payload }) => ({
      ...state,
      backgroundImage: payload?.backgroundImage,
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
  setBackgroundImage,
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
