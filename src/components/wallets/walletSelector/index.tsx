import { Radio, Typography } from "antd";
import { RadioChangeEvent } from 'antd/lib/radio'
import { Wallet } from "../../../interfaces";
import { Props } from "./index.types";
import styles from "./styles.module.css";

export const WalletSelector = ({ wallets, defaultValue, onChange }: Props) => {
  const _handleSelect = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  const RenderWallets = () => {
    if (wallets.length > 0) {
      return (
        <Radio.Group
          defaultValue={defaultValue || 0}
          onChange={_handleSelect}
          className={styles.container}
        >
          {wallets.map((wallet: Wallet) => (
            <Radio.Button
              value={wallet.id}
              key={wallet.id}
              className={styles.button}
            >
              {wallet.address}
            </Radio.Button>
          ))}
        </Radio.Group>
      );
    }

    return <Typography.Paragraph>Add your first wallet</Typography.Paragraph>;
  };

  return <RenderWallets />;
};
