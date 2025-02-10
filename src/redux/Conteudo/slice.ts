import { ConteudoReducerState } from "./interfaces";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "../storage";

const initialState: ConteudoReducerState = {
  idEixo: 0,
  eixos: [],
  idDisciplina: 0,
  disciplinas: [],
  idAula: 0,
  temas: [],
  aula: { id: 0, mapa: "", aula: "", nome: "" },
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
    startGetEixos: (state) => ({
      ...state,
      loading: true,
    }),

    successGetEixos: (state, { payload }) => ({
      ...state,
      eixos: payload,
      loading: false,
    }),

    failureGetEixos: (state) => ({
      ...state,
      loading: false,
    }),

    setEixo: (state, { payload }) => ({
      ...state,
      idEixo: payload,
    }),

    // Busca Disciplinas
    startGetDisciplinas: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetDisciplinas: (state, { payload }) => ({
      ...state,
      disciplinas: payload,
      loading: false,
    }),

    failureGetDisciplinas: (state) => ({
      ...state,
      loading: false,
    }),

    setDisciplina: (state, { payload }) => ({
      ...state,
      idDisciplina: payload,
    }),

    // Busca Temas
    startGetTemas: (state, { payload }) => ({
      ...state,
      loading: true,
    }),

    successGetTemas: (state, { payload }) => ({
      ...state,
      temas: payload,
      loading: false,
    }),

    failureGetTemas: (state) => ({
      ...state,
      loading: false,
    }),

    setAula: (state, { payload }) => ({
      ...state,
      idAula: payload,
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
  },
});

export const {
  startGetEixos,
  successGetEixos,
  failureGetEixos,
  setEixo,
  startGetDisciplinas,
  successGetDisciplinas,
  failureGetDisciplinas,
  setDisciplina,
  startGetTemas,
  successGetTemas,
  failureGetTemas,
  startGetAula,
  successGetAula,
  failureGetAula,
  setAula,
} = slice.actions;

const SessionReducer = persistReducer(persistConfig, slice.reducer);

export default SessionReducer;
