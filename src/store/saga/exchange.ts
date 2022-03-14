import { AxiosResponse } from "axios";
import { call, CallEffect, put, PutEffect, takeEvery } from "redux-saga/effects";
import { ModifyRatesAction } from "../../interfaces";
import { exchangeApi } from "../../services/exchange";
import {
  GET_RATES_REQUEST,
  GET_RATES_REQUEST_FAILED,
  GET_RATES_REQUEST_SUCCESS,
  MODIFY_RATES_REQUEST,
  MODIFY_RATES_REQUEST_FAILED,
} from "../reducers/exchange";

function* getRates(): Generator<CallEffect | PutEffect, void, AxiosResponse<{}, {}>> {
  try {
    const result = yield call(exchangeApi.getRates);
    yield put({ type: GET_RATES_REQUEST_SUCCESS, payload: result.data })
  } catch (error) {
    yield put({ type: GET_RATES_REQUEST_FAILED, payload: error });
  }
}

function* modifyRates(action: ModifyRatesAction): Generator<CallEffect | PutEffect, void, AxiosResponse<{}, {}>> {
  try {
    yield call(exchangeApi.modifyRates, action.payload.currency, action.payload.rates);
    const newRates = yield call(exchangeApi.getRates);
    yield put({ type: GET_RATES_REQUEST_SUCCESS, payload: newRates.data })
  } catch (error) {
    yield put({ type: MODIFY_RATES_REQUEST_FAILED, payload: error })
  }
}

export function* exchangeSaga() {
  yield takeEvery(GET_RATES_REQUEST, getRates);
  yield takeEvery(MODIFY_RATES_REQUEST, modifyRates);
}
