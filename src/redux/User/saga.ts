import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureGetUserInfo,
  startGetUserInfo,
  successGetUserInfo,
} from "./slice";

import { AxiosResponse } from "axios";
import api from "../../api/api";
import { newToast } from "api/toast";

const exportDefault = function* () {
  yield all([]);
};

export default exportDefault;
