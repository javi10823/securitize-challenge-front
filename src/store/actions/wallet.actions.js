import { CREATE_WALLETS_REQUEST, GET_WALLETS_REQUEST, REMOVE_WALLETS_REQUEST, SELECT_WALLET } from "../reducers/wallets.reducer"

export const getWallets = () => ({ type: GET_WALLETS_REQUEST })

export const selectWallet = (id) => ({ type: SELECT_WALLET, payload: id })

export const createWallet = (address) => ({ type: CREATE_WALLETS_REQUEST, payload: address })

export const removeWallet = (id) => ({ type: REMOVE_WALLETS_REQUEST, payload: id })
