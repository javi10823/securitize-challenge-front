import axios from "axios";

export const walletsApi = {
  getWallets: () => {
    return axios.get(process.env.REACT_APP_API_URL + "/wallets");
  },
  createWallet: (address) => {
    return axios.post(process.env.REACT_APP_API_URL + "/wallets", { address });
  },
  removeWallet: (id) => {
    return axios.delete(process.env.REACT_APP_API_URL + "/wallets", { id });
  },
  setFavorite: (id, favorite) => {
    return axios.put(process.env.REACT_APP_API_URL + "/wallets/favorite", { id, favorite });
  }
};
