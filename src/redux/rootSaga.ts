import { all, call } from "redux-saga/effects";

import SessionSaga from "./Session/saga";

export default function* rootSaga() {
  yield all([call(SessionSaga)]);
}
