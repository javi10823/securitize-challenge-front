type Address = string;
export interface Wallet {
  address: Address;
  balance: number;
  id: number;
  isFavorite: boolean;
  isOld: boolean;
}

/// REDUCERS

export interface WalletReducerType {
  type: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  payload: any;
  /* eslinbt*enable @typescript-eslint/no-explicit-any */
}

/// PAYLOADS

export type GetWalletsRequestSuccessPayload = Wallet[];
export type CreateWalletSuccessPayload = Wallet[];
export type RemoveWalletRequestSuccessPayload = Wallet[];
export type SetFavoriteRequestSuccessPayload = Wallet;
export type SelectWalletPayload = number;

/// ACTIONS

export interface CreateWalletAction {
  type: string;
  payload: Address;
}

export interface SetFavoriteAction {
  type: string;
  payload: {
    id: number;
    favorite: boolean;
  };
}