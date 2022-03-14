import { Wallet, WalletReducerType } from '../../interfaces';
import { CREATE_WALLETS_REQUEST_SUCCESS, GET_WALLETS_REQUEST_SUCCESS, REMOVE_WALLETS_REQUEST_SUCCESS, SELECT_WALLET, SET_FAVORITE_REQUEST_SUCCESS } from '../actionTypes';

interface State {
  wallets: Wallet[];
  selectedWallet?: number;
}

const initialState = {
  wallets: [],
  selectedWallet: undefined,
};

export const walletReducer = (
  state: State = initialState,
  { payload, type }: WalletReducerType
): State => {
  switch (type) {
  case GET_WALLETS_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: payload,
      selectedWallet: payload[0]?.id || null,
    };
  case SELECT_WALLET:
    return { ...state, selectedWallet: payload };
  case CREATE_WALLETS_REQUEST_SUCCESS:
    return { ...state, wallets: payload,
      selectedWallet:
          payload.length > 1 ? payload[0].id : state.selectedWallet, };
  case REMOVE_WALLETS_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: payload,
      selectedWallet: payload[0]?.id || null,
    };
  case SET_FAVORITE_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: state.wallets.map((wallet) =>
        wallet.id === payload.id ? payload : wallet
      ),
    };
  default:
    return state;
  }
};
