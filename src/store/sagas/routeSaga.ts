import routeApi, { Point } from "../apis/routeApi";
import { call, put } from "redux-saga/effects";

import {
  ERROR_LOADING_ROUTE,
  SUCCESS_NEW_ROUTE,
  START_LOADING_ROUTE,
} from "../constants/routeConstants";

type Payload = { start: Point; end: Point };

function* routeSaga({ payload }: { payload: Payload }) {
  yield put({ type: START_LOADING_ROUTE });
  const { start, end } = payload;
  const { response, error } = yield call(routeApi, start, end);
  if (response) {
    yield put({
      type: SUCCESS_NEW_ROUTE,
      payload: { route: response },
    });
  } else yield put({ type: ERROR_LOADING_ROUTE, payload: { error } });
}

export default routeSaga;
