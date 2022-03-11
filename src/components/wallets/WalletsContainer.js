import { Button, Card, Col, Row, Tooltip, Typography } from "antd";
import { PlusOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { WalletData } from "./walletData/WalletData";
import { WalletSelector } from "./walletSelector/WalletSelector";
import styles from "./styles.module.css";
import { useState } from "react";

export const WalletsContainer = ({
  wallets,
  selectedWallet,
  selectWallet,
  addWallet,
  removeWallet,
  setFavorite,
}) => {
  const [seeFavorites, setSeeFavorites] = useState(false);
  return (
    <Row justify="center">
      <Col className={styles.col} span={12}>
        <Card className={styles.card}>
          <Row>
            <Col flex="auto">
              <Typography.Title>Select a wallet</Typography.Title>
              <Tooltip title="See favorites">
                <Button
                  shape="circle"
                  icon={
                    seeFavorites ? (
                      <StarFilled color="#F5C242" />
                    ) : (
                      <StarOutlined />
                    )
                  }
                  onClick={() => setSeeFavorites(!seeFavorites)}
                />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Add new wallet">
                <Button
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={addWallet}
                />
              </Tooltip>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <WalletSelector
                wallets={seeFavorites?wallets.filter(wallet => wallet.isFavorite):wallets}
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
            onFavorite={setFavorite}
          />
        </Card>
      </Col>
    </Row>
  );
};
