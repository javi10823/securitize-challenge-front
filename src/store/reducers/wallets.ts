import { message } from 'antd';
import { Wallet, WalletReducerType } from '../../interfaces';
import {
  CREATE_WALLETS_REQUEST,
  CREATE_WALLETS_REQUEST_FAILED,
  CREATE_WALLETS_REQUEST_SUCCESS,
  GET_WALLETS_REQUEST,
  GET_WALLETS_REQUEST_FAILED,
  GET_WALLETS_REQUEST_SUCCESS,
  REMOVE_WALLETS_REQUEST,
  REMOVE_WALLETS_REQUEST_FAILED,
  REMOVE_WALLETS_REQUEST_SUCCESS,
  SELECT_WALLET,
  SET_FAVORITE_REQUEST,
  SET_FAVORITE_REQUEST_FAILED,
  SET_FAVORITE_REQUEST_SUCCESS,
} from '../actionTypes';

interface State {
  wallets: Wallet[];
  selectedWallet?: number;
  loading: boolean;
}

const initialState = {
  wallets: [],
  selectedWallet: undefined,
  loading: false,
};

export const walletReducer = (
  state: State = initialState,
  { payload, type }: WalletReducerType
): State => {
  switch (type) {
  // SET LOADING ON REQUEST
  case GET_WALLETS_REQUEST:
  case CREATE_WALLETS_REQUEST:
  case REMOVE_WALLETS_REQUEST:
  case SET_FAVORITE_REQUEST:
    return { ...state, loading: true };
    // Disable loader on error
  case GET_WALLETS_REQUEST_FAILED:
  case CREATE_WALLETS_REQUEST_FAILED:
  case REMOVE_WALLETS_REQUEST_FAILED:
  case SET_FAVORITE_REQUEST_FAILED:
    message.error(payload);
    return { ...state, loading: false };
  case GET_WALLETS_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: payload,
      selectedWallet: payload[0]?.id || null,
      loading: false,
    };
  case SELECT_WALLET:
    return { ...state, selectedWallet: payload };
  case CREATE_WALLETS_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: payload,
      selectedWallet:
          payload.length > 1 ? payload[0].id : state.selectedWallet,
      loading: false,
    };
  case REMOVE_WALLETS_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: payload,
      selectedWallet: payload[0]?.id || null,
      loading: false,
    };
  case SET_FAVORITE_REQUEST_SUCCESS:
    return {
      ...state,
      wallets: state.wallets.map((wallet) =>
        wallet.id === payload.id ? payload : wallet
      ),
      loading: false,
    };
  default:
    return state;
  }
};
