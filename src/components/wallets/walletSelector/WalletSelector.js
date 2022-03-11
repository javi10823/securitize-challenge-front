import { Radio } from 'antd';
import styles from './styles.module.css';

export const WalletSelector = ({ wallets, defaultValue, onChange }) => {
  const _handleSelect = (e) => {
    onChange(e.target.value)
  }

  return (
    <Radio.Group defaultValue={defaultValue || 0} onChange={_handleSelect} className={styles.container}>
      {wallets.map((wallet, index) => (
        <Radio.Button value={wallet.id} key={wallet.id} className={styles.button}>{wallet.address}</Radio.Button>
      ))}
    </Radio.Group>
  );
};
