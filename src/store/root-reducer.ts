import { combineReducers } from '@reduxjs/toolkit';
import { exchangeReducer, walletReducer } from './reducers';

const rootReducer = combineReducers({
  wallets: walletReducer,
  exchange: exchangeReducer,
});

export default rootReducer;
