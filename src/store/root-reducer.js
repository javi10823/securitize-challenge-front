import { combineReducers } from "@reduxjs/toolkit";
import { walletReducer } from "./reducers/wallets.reducer";

export default combineReducers({
    wallets: walletReducer,
})