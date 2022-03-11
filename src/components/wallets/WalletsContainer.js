import { Button, Card, Col, Row, Tooltip, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { WalletData } from "./walletData/WalletData";
import { WalletSelector } from "./walletSelector/WalletSelector";
import styles from "./styles.module.css";

export const WalletsContainer = ({
  wallets,
  selectedWallet,
  selectWallet,
  addWallet,
  removeWallet,
}) => {
  console.log({ wallets, selectedWallet });
  return (
    <Row justify="center">
      <Col className={styles.col} span={12}>
        <Card className={styles.card}>
          <Row>
            <Col flex="auto">
              <Typography.Title>Select a wallet</Typography.Title>
            </Col>
            <Col>
              <Tooltip title="Add new wallet">
                <Button shape="circle" icon={<PlusOutlined />} onClick={addWallet} />
              </Tooltip>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <WalletSelector
                wallets={wallets}
                defaultValue={selectedWallet}
                onChange={selectWallet}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col className={styles.col} span={12}>
        <Card className={styles.card}>
          <Typography.Title>Wallet data</Typography.Title>
          <WalletData
            wallet={wallets.find((wallet) => wallet.id === selectedWallet)}
            onDelete={removeWallet}
          />
        </Card>
      </Col>
    </Row>
  );
};
