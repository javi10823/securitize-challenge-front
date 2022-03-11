import { combineReducers } from "@reduxjs/toolkit";
import { exchangeReducer } from "./reducers/exchange.reducer";
import { walletReducer } from "./reducers/wallets.reducer";

export default combineReducers({
    wallets: walletReducer,
    exchange: exchangeReducer,
})