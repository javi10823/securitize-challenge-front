import { ExchangeReducerType } from '../../interfaces';

export const GET_RATES_REQUEST = 'GetRatesRequest';
export const GET_RATES_REQUEST_SUCCESS = 'GetRatesRequestSuccess';
export const GET_RATES_REQUEST_FAILED = 'GetRatesRequestFailed';

export const MODIFY_RATES_REQUEST = 'ModifyRatesRequest';
export const MODIFY_RATES_REQUEST_SUCCESS = 'ModifyRatesRequestSuccess';
export const MODIFY_RATES_REQUEST_FAILED = 'ModifyRatesRequestFailed';

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
