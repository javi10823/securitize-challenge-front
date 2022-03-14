import { AxiosResponse } from 'axios';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { ModifyRatesAction } from '../../interfaces';
import { exchangeApi } from '../../services';
import {
  GET_RATES_REQUEST,
  GET_RATES_REQUEST_FAILED,
  GET_RATES_REQUEST_SUCCESS,
  MODIFY_RATES_REQUEST,
  MODIFY_RATES_REQUEST_FAILED,
} from '../actionTypes';

function* getRates(): Generator<
  CallEffect | PutEffect,
  void,
  AxiosResponse<Record<string, unknown>, Record<string, unknown>>
  > {
  try {
    const result = yield call(exchangeApi.getRates);
    yield put({ type: GET_RATES_REQUEST_SUCCESS, payload: result.data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put({ type: GET_RATES_REQUEST_FAILED, payload: error.response?.data?.message });
  }
}

function* modifyRates(
  action: ModifyRatesAction
): Generator<
  CallEffect | PutEffect,
  void,
  AxiosResponse<Record<string, unknown>, Record<string, unknown>>
> {
  try {
    yield call(
      exchangeApi.modifyRates,
      action.payload.currency,
      action.payload.rates
    );
    const newRates = yield call(exchangeApi.getRates);
    yield put({ type: GET_RATES_REQUEST_SUCCESS, payload: newRates.data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put({ type: MODIFY_RATES_REQUEST_FAILED, payload: error.response?.data?.message });
  }
}

export function* exchangeSaga() {
  yield takeEvery(GET_RATES_REQUEST, getRates);
  yield takeEvery(MODIFY_RATES_REQUEST, modifyRates);
}
