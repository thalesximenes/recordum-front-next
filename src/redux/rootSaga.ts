import { all, call } from "redux-saga/effects";

import ConteudoSaga from "./Conteudo/saga";
import SessionSaga from "./Session/saga";
import UserSaga from "./User/saga";

export default function* rootSaga() {
  yield all([call(ConteudoSaga), call(SessionSaga), call(UserSaga)]);
}
