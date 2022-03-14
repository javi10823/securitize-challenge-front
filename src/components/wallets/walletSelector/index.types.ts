import { Wallet } from "../../../interfaces";

export type Props = {
    wallets: Wallet[];
    defaultValue?: number;
    onChange: (value: number) => void
}