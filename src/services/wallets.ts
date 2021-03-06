import axios from 'axios';

export const walletsApi = {
  getWallets: () => {
    return axios.get(process.env.REACT_APP_API_URL + '/wallets');
  },
  createWallet: (address: string) => {
    return axios.post(process.env.REACT_APP_API_URL + '/wallets', { address });
  },
  removeWallet: () => {
    return axios.delete(process.env.REACT_APP_API_URL + '/wallets');
  },
  setFavorite: (id: number, favorite: boolean) => {
    return axios.put(process.env.REACT_APP_API_URL + '/wallets/favorite', { id, favorite });
  }
};
