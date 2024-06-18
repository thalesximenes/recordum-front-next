import { all, call, put, takeLatest } from "redux-saga/effects";
import { changeNetworkStatus, startLogin, successLogin } from "./actions";

import { AxiosResponse } from "axios";
import api from "../../api/api";
import { newToast } from "api/toast";

function* startLoginSaga() {
  yield takeLatest(startLogin, function* ({ payload }: { payload: any }) {
    try {
      const data: AxiosResponse<any> = yield api.post("/login", null);

      yield put(changeNetworkStatus(false));
      yield put(successLogin({ data, token: payload.token }));

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
