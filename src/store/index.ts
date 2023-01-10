import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./reducers/routeReducer";

import createSagaMiddleWare from "@redux-saga/core";
import { takeEvery } from "redux-saga/effects";
import routeSaga from "./sagas/routeSaga";
import { GET_NEW_ROUTE } from "./constants/routeConstants";

function* rootSaga() {
  //@ts-ignore
  yield takeEvery(GET_NEW_ROUTE, routeSaga);
}

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: { route: routeReducer },
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
