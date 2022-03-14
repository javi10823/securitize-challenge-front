import { Wallet, WalletReducerType } from '../../interfaces';

export const GET_WALLETS_REQUEST = 'GetWalletsRequest';
export const GET_WALLETS_REQUEST_SUCCESS = 'GetWalletsRequestSuccess';
export const GET_WALLETS_REQUEST_FAILED = 'GetWalletsRequestFailed';

export const CREATE_WALLETS_REQUEST = 'CreateWalletsRequest';
export const CREATE_WALLETS_REQUEST_SUCCESS = 'CreateWalletsRequestSuccess';
export const CREATE_WALLETS_REQUEST_FAILED = 'CreateWalletsRequestFailed';

export const REMOVE_WALLETS_REQUEST = 'RemoveWalletsRequest';
export const REMOVE_WALLETS_REQUEST_SUCCESS = 'RemoveWalletsRequestSuccess';
export const REMOVE_WALLETS_REQUEST_FAILED = 'RemoveWalletsRequestFailed';

export const SET_FAVORITE_REQUEST = 'SetFavoriteRequest';
export const SET_FAVORITE_REQUEST_SUCCESS = 'SetFavoriteRequestSuccess';
export const SET_FAVORITE_REQUEST_FAILED = 'SetFavoriteRequestFailed';

export const SELECT_WALLET = 'SellectWallet';

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
