import { all, call, put, takeLatest } from "redux-saga/effects";
import { changeNetworkStatus, startLogin, successLogin } from "./slice";

import api from "../../api/api";
import { newToast } from "api/toast";

function* startLoginSaga() {
  yield takeLatest(startLogin, function* ({ payload }: { payload: any }) {
    try {
      yield api.post("/login", null);

      yield put(changeNetworkStatus(false));
      yield put(successLogin({ token: payload.token }));

      if (payload?.callback) {
        payload.callback("/home");
      }
    } catch (error: any) {
      if (error?.message === "Network Error") {
        newToast("A rede conectada não tem acesso à internet", "WARNING");
        yield put(changeNetworkStatus(true));
      }
    }
  });
}

const exportDefault = function* () {
  yield all([call(startLoginSaga)]);
};

export default exportDefault;
