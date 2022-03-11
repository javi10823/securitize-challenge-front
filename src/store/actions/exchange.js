import { GET_RATES_REQUEST, MODIFY_RATES_REQUEST } from "../reducers/exchange";

export const getRates = () => ({ type: GET_RATES_REQUEST });

export const modifyRates = (currency, rates) => ({ type: MODIFY_RATES_REQUEST, payload: { currency, rates } })
