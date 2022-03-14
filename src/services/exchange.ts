import axios from "axios";

export const exchangeApi = {
  getRates: () => axios.get(process.env.REACT_APP_API_URL + "/exchangerates"),
  modifyRates: (currency: string, rates: number) =>
    axios.put(process.env.REACT_APP_API_URL + "/exchangerates", {
      currency,
      rate: rates,
    }),
};
