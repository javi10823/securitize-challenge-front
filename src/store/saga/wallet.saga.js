import { call, put, takeEvery } from "redux-saga/effects"
import { walletsApi } from "../../services/wallets.service"
import { GET_WALLETS_REQUEST, GET_WALLETS_REQUEST_SUCCESS } from "../reducers/wallets.reducer"

export function* getWallets(action) {
    try {
        const result = yield call(walletsApi.getWallets);
        yield put({type: GET_WALLETS_REQUEST_SUCCESS, wallets: result })
    } catch (error) {

    }
}

export function* walletSaga() {
    yield takeEvery(GET_WALLETS_REQUEST, getWallets)
}
