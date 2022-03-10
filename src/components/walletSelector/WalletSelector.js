import { useState } from "react";
import styles from "./styles.module.css";

export const WalletSelector = ({ wallets, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue || 0);

  const _handleSelect = (index) => {
    setSelected(index)
    onChange(index)
  }

  return (
    <ul className={styles.listContainer}>
      {wallets.map((wallet, index) => (
        <li
          key={index}
          className={`${styles.item} ${
            selected === index ? styles.itemActive : ""
          }`}>
          <button onClick={() => _handleSelect(index)}>{wallet.address}</button>
        </li>
      ))}
    </ul>
  );
};
