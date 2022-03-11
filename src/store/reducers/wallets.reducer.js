export const GET_WALLETS_REQUEST = "GetWalletsRequest";
export const GET_WALLETS_REQUEST_SUCCESS = "GetWalletsRequestSuccess";
export const GET_WALLETS_REQUEST_FAILED = "GetWalletsRequestFailed";

export const CREATE_WALLETS_REQUEST = "CreateWalletsRequest";
export const CREATE_WALLETS_REQUEST_SUCCESS = "CreateWalletsRequestSuccess";
export const CREATE_WALLETS_REQUEST_FAILED = "CreateWalletsRequestFailed";

export const REMOVE_WALLETS_REQUEST = "RemoveWalletsRequest";
export const REMOVE_WALLETS_REQUEST_SUCCESS = "RemoveWalletsRequestSuccess";
export const REMOVE_WALLETS_REQUEST_FAILED = "RemoveWalletsRequestFailed";

export const SELECT_WALLET = "SellectWallet";

const initialState = {
  wallets: [],
  selectedWallet: null,
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLETS_REQUEST_SUCCESS:
      return { ...state, wallets: action.payload };
    case SELECT_WALLET:
      return { ...state, selectedWallet: action.payload };
    case CREATE_WALLETS_REQUEST_SUCCESS:
      return { ...state, wallets: action.payload };
    case REMOVE_WALLETS_REQUEST_SUCCESS:
      return { ...state, wallets: action.payload, selectedWallet: action.payload[0]?.id || null };
    default:
      return state;
  }
};
