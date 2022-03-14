export interface Rates {
  currency: string;
  rates: string;
}



/// REDUCERS

export interface ExchangeReducerType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

/// ACTIONS

export interface ModifyRatesAction {
  type: string;
  payload: {
    currency: string;
    rates: number;
  }
}
