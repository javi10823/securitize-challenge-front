import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";

import { exchangeSaga } from "./saga/exchange.saga";
import { walletSaga } from "./saga/wallet.saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(walletSaga);
sagaMiddleware.run(exchangeSaga);
