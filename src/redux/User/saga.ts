import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureCadastrarUsuario,
  failureGetUserInfo,
  startCadastrarUsuario,
  startGetUserInfo,
  successCadastrarUsuario,
  successGetUserInfo,
} from "./slice";

import api from "../../api/api";
import { newToast } from "api/toast";

function* startCadastrarUsuarioSaga() {
  yield takeLatest(
    startCadastrarUsuario,
    function* ({ payload }: { payload: any }) {
      try {
        yield api.post("/usuario/cadastro/", { ...payload });

        yield put(successCadastrarUsuario());

        newToast("Usuário cadastrado com sucesso.", "SUCCESS");
        console.log(payload);
        payload?.callback?.();
      } catch (error: any) {
        console.log(error);

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
      console.log("aqui");
      yield api.get("/usuario/informacao/", null);

      yield put(successGetUserInfo());

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
