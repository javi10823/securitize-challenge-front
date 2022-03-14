import { combineReducers } from '@reduxjs/toolkit';
import { exchangeReducer } from './reducers/exchange';
import { walletReducer } from './reducers/wallets';

const rootReducer = combineReducers({
  wallets: walletReducer,
  exchange: exchangeReducer,
});

export default rootReducer;
