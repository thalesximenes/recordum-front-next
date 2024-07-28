import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserReducerState, Usuario } from "./interfaces";

import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: UserReducerState = {
  usuario: null,
  date: null,
  loadingUsuario: false,
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
    successGetUserInfo: (state, action: PayloadAction<Usuario>) => ({
      ...state,
      usuario: { ...action.payload },
      date: new Date(),
    }),
    failureGetUserInfo: () => ({
      ...initialState,
    }),
    resetUserInfo: () => ({
      ...initialState,
    }),

    // Actions relacionadas ao Cadatro de Usuário
    startCadastrarUsuario: (state, { payload }) => ({
      ...initialState,
      loadingUsuario: true,
    }),
    successCadastrarUsuario: () => ({
      ...initialState,
    }),
    failureCadastrarUsuario: () => ({
      ...initialState,
    }),
  },
});

export const {
  startGetUserInfo,
  successGetUserInfo,
  failureGetUserInfo,
  resetUserInfo,
  startCadastrarUsuario,
  successCadastrarUsuario,
  failureCadastrarUsuario,
} = slice.actions;

const UserReducer = persistReducer(persistConfig, slice.reducer);

export default UserReducer;
