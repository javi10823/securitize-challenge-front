import { Button, Card, Col, Row, Tooltip, Typography } from "antd";
import { PlusOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { WalletData } from "./walletData";
import { WalletSelector } from "./walletSelector";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeWallet,
  selectWallet,
  setFavorite,
} from "../../store/actions/wallet";
import { useAppSelector } from "../../hooks";

export const WalletsContainer = ({ addWallet }) => {
  const { wallets, selectedWallet } = useAppSelector(({ wallets }) => wallets);
  const dispatch = useDispatch();
  const [seeFavorites, setSeeFavorites] = useState(false);

  const _handleSelect = (id) => dispatch(selectWallet(id));
  const _handleRemove = (id) => dispatch(removeWallet(id));
  const _handleFavorite = (id, favorite) => dispatch(setFavorite(id, favorite));

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
                wallets={
                  seeFavorites
                    ? wallets.filter((wallet) => wallet.isFavorite)
                    : wallets
                }
                defaultValue={selectedWallet}
                onChange={_handleSelect}
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
            onDelete={_handleRemove}
            onFavorite={_handleFavorite}
          />
        </Card>
      </Col>
    </Row>
  );
};
