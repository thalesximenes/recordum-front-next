import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureCadastrarUsuario,
  failureGetUserInfo,
  startCadastrarUsuario,
  startGetUserInfo,
  successCadastrarUsuario,
  successGetUserInfo,
} from "./slice";

import { AxiosResponse } from "axios";
import api from "../../api/api";
import { newToast } from "api/toast";

function* startCadastrarUsuarioSaga() {
  yield takeLatest(
    startCadastrarUsuario,
    function* ({ payload }: { payload: any }) {
      try {
        yield api.post("/cadastrar-usuario", null);

        yield put(successCadastrarUsuario());

        newToast("Usuário cadastrado com sucesso.", "SUCCESS");
        payload.callback?.();
      } catch (error: any) {
        newToast("Aconteceu um erro ao cadastrar o usuário.", "ERROR");
        yield put(failureCadastrarUsuario());
      }
    }
  );
}

const exportDefault = function* () {
  yield all([startCadastrarUsuarioSaga]);
};

export default exportDefault;
