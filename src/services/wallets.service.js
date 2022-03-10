import axios from "axios"

export const walletsApi = {
    getWallets: () => {
        return axios.get(process.env.REACT_APP_API_URL + 'wallets')
    }
}