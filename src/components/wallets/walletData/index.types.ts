import { Wallet } from '../../../interfaces';

export type Props = {
  wallet?: Wallet;
  onDelete: (id: number) => void;
  onFavorite: (id: number, isFavorite: boolean) => void;
};
