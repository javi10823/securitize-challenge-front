import { Radio, Typography } from "antd";
import styles from "./styles.module.css";

export const WalletSelector = ({ wallets, defaultValue, onChange }) => {
  const _handleSelect = (e) => {
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
          {wallets.map((wallet, index) => (
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
