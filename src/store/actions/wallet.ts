import {
  CREATE_WALLETS_REQUEST,
  GET_WALLETS_REQUEST,
  REMOVE_WALLETS_REQUEST,
  SELECT_WALLET,
  SET_FAVORITE_REQUEST,
} from "../actionTypes";

export const getWallets = () => ({ type: GET_WALLETS_REQUEST });

export const selectWallet = (id: number) => ({
  type: SELECT_WALLET,
  payload: id,
});

export const createWallet = (address: string) => ({
  type: CREATE_WALLETS_REQUEST,
  payload: address,
});

export const removeWallet = (id: number) => ({
  type: REMOVE_WALLETS_REQUEST,
  payload: id,
});

export const setFavorite = (id: number, favorite: boolean) => ({
  type: SET_FAVORITE_REQUEST,
  payload: { id, favorite },
});
