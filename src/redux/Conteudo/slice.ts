import { ConteudoReducerState } from "./interfaces";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: ConteudoReducerState = {
  eixo: [],
  disciplinas: [],
  temas: [],
  aula: [],
  loading: false,
};

const persistConfig = {
  key: "conteudo",
  storage,
};

const slice = createSlice({
  name: "conteudo",
  initialState,
  reducers: {
    // Busca Eixos
    startGetEixos: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetEixos: (state, { payload }) => ({
      ...state,
      token: payload?.token,
      loading: false,
    }),

    failureGetEixos: (state) => ({
      ...state,
      loading: false,
    }),

    // Busca Disciplinas
    startGetDisciplinas: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetDisciplinas: (state, { payload }) => ({
      ...state,
      token: payload?.token,
      loading: false,
    }),

    failureGetDisciplinas: (state) => ({
      ...state,
      loading: false,
    }),

    // Busca Temas
    startGetTemas: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetTemas: (state, { payload }) => ({
      ...state,
      token: payload?.token,
      loading: false,
    }),

    failureGetTemas: (state) => ({
      ...state,
      loading: false,
    }),

    // Busca Aulas
    startGetAula: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetAula: (state, { payload }) => ({
      ...state,
      token: payload?.token,
      loading: false,
    }),

    failureGetAula: (state) => ({
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

    resetGetEixos: () => ({
      ...initialState,
    }),
  },
});

export const {
  setBackgroundImage,
  setPageName,
  startGetEixos,
  successGetEixos,
  failureGetEixos,
  startGetDisciplinas,
  successGetDisciplinas,
  failureGetDisciplinas,
  startGetTemas,
  successGetTemas,
  failureGetTemas,
  startGetAula,
  successGetAula,
  failureGetAula,
  resetGetEixos,
  changeNetworkStatus,
  startLogout,
  successLogout,
} = slice.actions;

const SessionReducer = persistReducer(persistConfig, slice.reducer);

export default SessionReducer;
