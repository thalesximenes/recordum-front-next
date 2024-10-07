import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  changeNetworkStatus,
  failureLogin,
  startLogin,
  successLogin,
} from "./slice";

import api from "../../api/api";
import { newToast } from "api/toast";
import { startGetUserInfo, successGetUserInfo } from "../User/slice";

function* startLoginSaga() {
  yield takeLatest(startLogin, function* ({ payload }: { payload: any }) {
    try {
      // const { data } = yield api.post("/login", null);

      yield put(changeNetworkStatus(false));
      yield put(successLogin({ token: payload?.token }));

      yield put(
        successGetUserInfo({
          primeiroNome: `Thales`,
          sobrenome: `Ximenes`,
          escolaridade: `Ensino Médio`,
          vestibulares: `Enem`,
          universidade: `UFC`,
          curso: `SMD`,
          email: `thales__ximenes@hotmail.com`,
        })
      );

      payload.callback?.();
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
        yield put(changeNetworkStatus(true));
      }
      yield put(failureLogin());
    }
  });
}

const exportDefault = function* () {
  yield all([call(startLoginSaga)]);
};

export default exportDefault;
