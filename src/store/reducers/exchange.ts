import { ExchangeReducerType } from '../../interfaces';
import { GET_RATES_REQUEST_SUCCESS, MODIFY_RATES_REQUEST_SUCCESS } from '../actionTypes';

export const initialValues = {
  rates: [],
};

export const exchangeReducer = (state = initialValues, action: ExchangeReducerType) => {
  switch (action.type) {
  case GET_RATES_REQUEST_SUCCESS:
    return { ...state, rates: action.payload };
  case MODIFY_RATES_REQUEST_SUCCESS:
    return { ...state, rates: action.payload };
  default:
    return state;
  }
};
