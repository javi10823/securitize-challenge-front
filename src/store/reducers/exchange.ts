import { ExchangeReducerType } from '../../interfaces';
import {
  GET_RATES_REQUEST,
  GET_RATES_REQUEST_SUCCESS,
  GET_RATES_REQUEST_FAILED,
  MODIFY_RATES_REQUEST,
  MODIFY_RATES_REQUEST_SUCCESS,
  MODIFY_RATES_REQUEST_FAILED,
} from '../actionTypes';

export const initialValues = {
  rates: [],
  loading: false,
};

export const exchangeReducer = (
  state = initialValues,
  action: ExchangeReducerType
) => {
  switch (action.type) {
  // Loading on requests
  case GET_RATES_REQUEST:
  case MODIFY_RATES_REQUEST:
    return { ...state, loading: true };
    // Disable loader on error
  case MODIFY_RATES_REQUEST_FAILED:
  case GET_RATES_REQUEST_FAILED:
    return { ...state, loading: false };
  case GET_RATES_REQUEST_SUCCESS:
    return { ...state, rates: action.payload, loading: false };
  case MODIFY_RATES_REQUEST_SUCCESS:
    return { ...state, rates: action.payload, loading: false };
  default:
    return state;
  }
};
