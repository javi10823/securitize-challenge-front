import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";

import { exchangeSaga } from "./saga/exchange";
import { walletSaga } from "./saga/wallet";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(walletSaga);
sagaMiddleware.run(exchangeSaga);

export type RootState = ReturnType<typeof rootReducer>;
