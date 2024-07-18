import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { Persistor, persistStore } from "redux-persist";
import createSagaMiddleware, { Task } from "redux-saga";

import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface ExtendedStore extends EnhancedStore {
  sagaTask?: Task;
  __persistor?: Persistor;
}

export const makeStore = (initialState) => {
  const isClient = typeof window !== "undefined";

  const store: ExtendedStore = configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
      gDM({
        thunk: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
    preloadedState: initialState,
    devTools: isClient,
  });

  if (isClient) store.__persistor = persistStore(store);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper<ExtendedStore>(makeStore, { debug: true });

export default wrapper;
export type AppStore = ReturnType<typeof makeStore>;
