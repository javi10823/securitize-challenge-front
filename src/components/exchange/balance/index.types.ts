import { Rates } from "../../../interfaces";

export type Props = {
  ethBalance?: number;
  rates?: Rates[];
  selectedRate: number;
  onModify: (value: number) => void;
}