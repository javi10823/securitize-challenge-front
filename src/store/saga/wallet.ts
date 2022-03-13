import { call, put, takeEvery } from "redux-saga/effects"
import { walletsApi } from "../../services/wallets"
import { CREATE_WALLETS_REQUEST, CREATE_WALLETS_REQUEST_FAILED, CREATE_WALLETS_REQUEST_SUCCESS, GET_WALLETS_REQUEST, GET_WALLETS_REQUEST_FAILED, GET_WALLETS_REQUEST_SUCCESS, REMOVE_WALLETS_REQUEST, REMOVE_WALLETS_REQUEST_FAILED, REMOVE_WALLETS_REQUEST_SUCCESS, SET_FAVORITE_REQUEST, SET_FAVORITE_REQUEST_FAILED, SET_FAVORITE_REQUEST_SUCCESS } from "../reducers/wallets"

function* getWallets(action) {
    try {
        const result = yield call(walletsApi.getWallets);
        console.log('getWallets', {result})
        yield put({type: GET_WALLETS_REQUEST_SUCCESS, payload: result.data })
    } catch (error) {
        console.error('getWalletsRequest', error)
        yield put({ type: GET_WALLETS_REQUEST_FAILED, payload: error })
    }
}

function* createWallet(action) {
    try {
        const result = yield call(walletsApi.createWallet, action.payload);
        console.log('createWallet', {result})
        const newWallets = yield call(walletsApi.getWallets);
        yield put({type: CREATE_WALLETS_REQUEST_SUCCESS, payload: newWallets.data});
    } catch (error) {
        yield put({ type: CREATE_WALLETS_REQUEST_FAILED, payload: error });
    }
}

function* removeWallet(action) {
    try {
        yield call(walletsApi.removeWallet);
        const newWallets = yield call(walletsApi.getWallets);
        yield put({type: REMOVE_WALLETS_REQUEST_SUCCESS, payload: newWallets.data});
    } catch (error) {
        yield put({ type: REMOVE_WALLETS_REQUEST_FAILED, payload: error })
    }
}

function* setFavorite(action) {
    try {
        const result = yield call(walletsApi.setFavorite, action.payload.id, action.payload.favorite);
        console.log('setFavorite', {result});
        yield put({type: SET_FAVORITE_REQUEST_SUCCESS, payload: result.data});
    } catch (error) {
        yield put({type: SET_FAVORITE_REQUEST_FAILED, payload: error})
    }
}

export function* walletSaga() {
    yield takeEvery(GET_WALLETS_REQUEST, getWallets)
    yield takeEvery(CREATE_WALLETS_REQUEST, createWallet)
    yield takeEvery(REMOVE_WALLETS_REQUEST, removeWallet)
    yield takeEvery(SET_FAVORITE_REQUEST, setFavorite)
}
