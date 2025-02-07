import { all, call } from "redux-saga/effects";

import SessionSaga from "./Session/saga";
import UserSaga from "./User/saga";

export default function* rootSaga() {
  yield all([call(SessionSaga), call(UserSaga)]);
}
