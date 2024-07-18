import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserReducerState } from "./interfaces";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: UserReducerState = {
  curso: "",
  email: "",
  escolaridade: "",
  primeiroNome: "",
  sobrenome: "",
  universidade: "",
  vestibulares: "",
};

const persistConfig = {
  key: "user",
  storage,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Actions relacionadas ao Usuario
    startGetUserInfo: (state, { payload }) => ({
      ...initialState,
    }),
    successGetUserInfo: (state, action: PayloadAction<UserReducerState>) => ({
      ...state,
      ...action.payload,
    }),
    failureGetUserInfo: () => ({
      ...initialState,
    }),
  },
});

export const { startGetUserInfo, successGetUserInfo, failureGetUserInfo } =
  slice.actions;

const UserReducer = persistReducer(persistConfig, slice.reducer);

export default UserReducer;
