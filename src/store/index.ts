import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

import { exchangeSaga, walletSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable @typescript-eslint/no-explicit-any */

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(walletSaga);
sagaMiddleware.run(exchangeSaga);

export type RootState = ReturnType<typeof rootReducer>;
