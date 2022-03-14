import { Button, Card, Col, Row, Spin, Tooltip, Typography } from 'antd';
import { PlusOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { WalletData } from './walletData';
import { WalletSelector } from './walletSelector';
import styles from './styles.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeWallet, selectWallet, setFavorite } from '../../store/actions';
import { useAppSelector } from '../../hooks';
import { Wallet } from '../../interfaces';
import { Props } from './index.types';

export const WalletsContainer = ({ addWallet }: Props) => {
  const { wallets, selectedWallet, loading } = useAppSelector(
    ({ wallets }) => wallets
  );
  const dispatch = useDispatch();
  const [seeFavorites, setSeeFavorites] = useState(false);

  const _handleSelect = (id: number) => dispatch(selectWallet(id));
  const _handleRemove = (id: number) => dispatch(removeWallet(id));
  const _handleFavorite = (id: number, favorite: boolean) =>
    dispatch(setFavorite(id, favorite));

  const getSelectedWallet = (): Wallet | undefined => {
    if (wallets.length === 1) return wallets[0];

    return wallets.find((wallet) => wallet.id === selectedWallet);
  };

  const walletsContent = loading ? (
    <Row justify="center">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  ) : (
    <WalletSelector
      wallets={
        seeFavorites ? wallets.filter(({ isFavorite }) => isFavorite) : wallets
      }
      defaultValue={selectedWallet}
      onChange={_handleSelect}
    />
  );

  return (
    <Row justify="center">
      <Col className={styles.col} xs={24} md={12}>
        <Card className={styles.card}>
          <Row>
            <Col flex="auto">
              <Typography.Title>Select a wallet</Typography.Title>
              <Tooltip title="See favorites">
                <Button
                  shape="circle"
                  icon={
                    seeFavorites ? (
                      <StarFilled style={{color: 'var(--color-gold)'}} />
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
                  disabled={loading}
                />
              </Tooltip>
            </Col>
          </Row>
          <Row justify="center">
            <Col>{walletsContent}</Col>
          </Row>
        </Card>
      </Col>
      <Col className={styles.col} xs={24} md={12}>
        <Card className={styles.card}>
          <Typography.Title>Wallet Data</Typography.Title>
          <WalletData
            wallet={getSelectedWallet()}
            onDelete={_handleRemove}
            onFavorite={_handleFavorite}
          />
        </Card>
      </Col>
    </Row>
  );
};
