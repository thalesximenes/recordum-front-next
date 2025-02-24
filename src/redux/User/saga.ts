import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureCadastrarUsuario,
  failureGetUserInfo,
  startCadastrarUsuario,
  startGetUserInfo,
  successCadastrarUsuario,
  successGetUserInfo,
} from "./slice";

import api from "../../api";
import { newToast } from "api/toast";

function* startCadastrarUsuarioSaga() {
  yield takeLatest(
    startCadastrarUsuario,
    function* ({ payload }: { payload: any }) {
      try {
        yield api.post("/usuario/cadastro/", { ...payload });

        yield put(successCadastrarUsuario());

        newToast("Usuário cadastrado com sucesso.", "SUCCESS");
        payload?.callback?.();
      } catch (error: any) {
        const errorData = error?.response?.data;
        errorData?.non_field_errors?.map((e) => newToast(e, "ERROR"));
        errorData?.email?.map((e) => newToast(e, "ERROR"));

        yield put(failureCadastrarUsuario());
      }
    }
  );
}

function* startGetUserInfoSaga() {
  yield takeLatest(startGetUserInfo, function* ({ payload }: { payload: any }) {
    try {
      api.defaults.headers.common["Authorization"] = `Token ${payload.token}`;

      const { data } = yield api.get("/usuario/informacao/");

      yield put(successGetUserInfo(data));

      payload?.callback?.();
    } catch (error: any) {
      newToast("Aconteceu um erro ao acessar sua conta.", "ERROR");
      yield put(failureGetUserInfo());
    }
  });
}

const exportDefault = function* () {
  yield all([call(startCadastrarUsuarioSaga), call(startGetUserInfoSaga)]);
};

export default exportDefault;
