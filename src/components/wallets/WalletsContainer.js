import { useState } from "react";
import { Card } from "../card/Card";
import { Row } from "../row/Row";
import { WalletSelector } from "../walletSelector/WalletSelector";
import styles from "./styles.module.css";

export const WalletsContainer = ({ wallets }) => {
  const [selectedWallet, setSelectedWallet] = useState(0);
  return (
    <Row>
      <Card>
        <h2 className={styles.cardTitle}>Select a wallet</h2>
        <WalletSelector
          wallets={wallets}
          defaultValue={selectedWallet}
          onChange={setSelectedWallet}
        />
      </Card>
      <Card>b</Card>
    </Row>
  );
};
