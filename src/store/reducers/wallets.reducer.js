export const GET_WALLETS_REQUEST = "GetWalletsRequest";
export const GET_WALLETS_REQUEST_SUCCESS = "GetWalletsRequestSuccess";

const initialState = {
  wallets: [],
  sellectedWallet: 0,
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLETS_REQUEST_SUCCESS:
      return { ...state, wallets: action.payload };
    default:
      return state;
  }
};
