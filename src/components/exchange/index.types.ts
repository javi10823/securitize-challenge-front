import { Rates } from "../../interfaces";

export type Props = {
  ethBalance?: number;
  rates: Rates[];
  modifyRates: (currency: string, rates: string) => void;
}