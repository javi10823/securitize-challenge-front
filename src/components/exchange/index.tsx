import { Row, Card, Col, Spin } from 'antd';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Balance } from './balance';
import { Props } from './index.types';
import { Rates } from './rates';
import styles from './styles.module.css';

export const ExchangeContainer = ({
  ethBalance,
  rates,
  modifyRates,
}: Props) => {
  const { loading } = useAppSelector(({ exchange }) => exchange);
  const [selectedRate, setSelectedRate] = useState(0);

  const _handleModify = (rate: string) => {
    modifyRates(rates[selectedRate]?.currency, rate);
  };

  const ratesContent = loading ? (
    <Row justify="center">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  ) : (
    <Rates
      rates={(rates && rates[selectedRate]?.rates) || '0'}
      onModify={_handleModify}
    />
  );

  const balanceContent = loading ? (
    <Row justify="center">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  ) : (
    <Balance
      ethBalance={ethBalance}
      rates={rates}
      selectedRate={selectedRate}
      onModify={setSelectedRate}
    />
  );

  return (
    <Row justify="center">
      <Col className={styles.col} xs={24} md={12}>
        <Card className={styles.card}>{ratesContent}</Card>
      </Col>
      <Col className={styles.col} xs={24} md={12}>
        <Card className={styles.card}>{balanceContent}</Card>
      </Col>
    </Row>
  );
};
