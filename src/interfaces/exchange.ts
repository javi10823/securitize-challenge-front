export interface Rates {
  currency: string;
  rates: string;
}



/// REDUCERS

export interface ExchangeReducerType {
  type: string;
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
