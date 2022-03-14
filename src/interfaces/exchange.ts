export interface Rates {
  currency: string;
  rates: string;
}



/// REDUCERS

export interface ExchangeReducerType {
  type: string;
  payload: unknown;
}

/// ACTIONS

export interface ModifyRatesAction {
  type: string;
  payload: {
    currency: string;
    rates: number;
  }
}
