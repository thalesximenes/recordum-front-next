import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  changeNetworkStatus,
  failureLogin,
  startLogin,
  successLogin,
} from "./slice";

import api from "../../api/api";
import { newToast } from "api/toast";
import { startGetUserInfo } from "../User/slice";

function* startLoginSaga() {
  yield takeLatest(startLogin, function* ({ payload }: { payload: any }) {
    try {
      const { data } = yield api.post("/usuario/login/", { ...payload });

      yield put(changeNetworkStatus(false));
      yield put(successLogin({ token: payload?.token }));
      yield put(startGetUserInfo({ ...data, callback: payload?.callback }));
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
        yield put(changeNetworkStatus(true));
      } else {
        error?.response?.data?.non_field_errors.map((e) =>
          newToast(e, "ERROR")
        );
      }
      yield put(failureLogin());
    }
  });
}

const exportDefault = function* () {
  yield all([call(startLoginSaga)]);
};

export default exportDefault;
