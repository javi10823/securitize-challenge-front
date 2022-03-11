import { call, put, takeEvery } from "redux-saga/effects"
import { walletsApi } from "../../services/wallets.service"
import { CREATE_WALLETS_REQUEST, CREATE_WALLETS_REQUEST_FAILED, CREATE_WALLETS_REQUEST_SUCCESS, GET_WALLETS_REQUEST, GET_WALLETS_REQUEST_FAILED, GET_WALLETS_REQUEST_SUCCESS, REMOVE_WALLETS_REQUEST, REMOVE_WALLETS_REQUEST_FAILED, REMOVE_WALLETS_REQUEST_SUCCESS } from "../reducers/wallets.reducer"

export function* getWallets(action) {
    try {
        const result = yield call(walletsApi.getWallets);
        console.log('getWallets', {result})
        yield put({type: GET_WALLETS_REQUEST_SUCCESS, payload: result.data })
    } catch (error) {
        console.error('getWalletsRequest', error)
        yield put({ type: GET_WALLETS_REQUEST_FAILED, payload: error })
    }
}

export function* createWallet(action) {
    try {
        const result = yield call(walletsApi.createWallet, action.payload);
        console.log('createWallet', {result})
        const newWallets = yield call(walletsApi.getWallets);
        yield put({type: CREATE_WALLETS_REQUEST_SUCCESS, payload: newWallets.data});
    } catch (error) {
        yield put({ type: CREATE_WALLETS_REQUEST_FAILED, payload: error });
    }
}

export function* removeWallet(action) {
    try {
        const result = yield call(walletsApi.removeWallet, action.payload);
        console.log('removeWallet', {result})
        const newWallets = yield call(walletsApi.getWallets);
        yield put({type: REMOVE_WALLETS_REQUEST_SUCCESS, payload: newWallets.data});
    } catch (error) {
        yield put({ type: REMOVE_WALLETS_REQUEST_FAILED, payload: error })
    }
}

export function* walletSaga() {
    yield takeEvery(GET_WALLETS_REQUEST, getWallets)
    yield takeEvery(CREATE_WALLETS_REQUEST, createWallet)
    yield takeEvery(REMOVE_WALLETS_REQUEST, removeWallet)
}
