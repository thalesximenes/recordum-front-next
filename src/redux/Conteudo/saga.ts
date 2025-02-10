import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureGetAula,
  failureGetDisciplinas,
  failureGetEixos,
  failureGetTemas,
  startGetAula,
  startGetDisciplinas,
  startGetEixos,
  startGetTemas,
  successGetAula,
  successGetDisciplinas,
  successGetEixos,
  successGetTemas,
} from "./slice";

import api from "../../api/api";
import { newToast } from "api/toast";

function* startGetEixosSaga() {
  yield takeLatest(startGetEixos, function* () {
    try {
      const { data } = yield api.get("/conteudo/eixos/");

      console.log(data);
      yield put(successGetEixos(data));
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
      } else {
        error?.response?.data?.detail.map((e) => newToast(e, "ERROR"));
      }
      yield put(failureGetEixos());
    }
  });
}

function* startGetDisciplinasSaga() {
  yield takeLatest(
    startGetDisciplinas,
    function* ({ payload }: { payload: any }) {
      try {
        const { data } = yield api.get(`/conteudo/disciplinas/${payload}`);

        yield put(successGetDisciplinas(data));
      } catch (error: any) {
        if (error?.message === "Network Error") {
          newToast("A rede conectada não tem acesso à internet", "WARNING");
        } else {
          error?.response?.data?.detail.map((e) => newToast(e, "ERROR"));
        }
        yield put(failureGetDisciplinas());
      }
    }
  );
}

function* startGetTemasSaga() {
  yield takeLatest(startGetTemas, function* ({ payload }: { payload: any }) {
    try {
      const { data } = yield api.get(`/conteudo/temas/${payload}`);

      yield put(successGetTemas(data));
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
      } else {
        error?.response?.data?.detail.map((e) => newToast(e, "ERROR"));
      }
      yield put(failureGetTemas());
    }
  });
}

function* startGetAulaSaga() {
  yield takeLatest(startGetAula, function* ({ payload }: { payload: any }) {
    try {
      const { data } = yield api.get("/conteudo/aula/", {
        params: { id: payload },
      });

      yield put(successGetAula(data));
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
      } else {
        error?.response?.data?.detail.map((e) => newToast(e, "ERROR"));
      }
      yield put(failureGetAula());
    }
  });
}

const exportDefault = function* () {
  yield all([
    call(startGetEixosSaga),
    call(startGetDisciplinasSaga),
    call(startGetTemasSaga),
    call(startGetAulaSaga),
  ]);
};

export default exportDefault;
