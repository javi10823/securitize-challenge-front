import { Row, Card, Col } from "antd";
import { useState } from "react";
import { Balance } from "./balance";
import { Rates } from "./rates";
import styles from "./styles.module.css";

export const ExchangeContainer = ({ ethBalance, rates, modifyRates }) => {
  const [selectedRate, setSelectedRate] = useState(0);

  const _handleModify = (rate) => {
    modifyRates(rates[selectedRate]?.currency, rate);
  };

  return (
    <Row justify="center">
      <Col className={styles.col} span={12}>
        <Card className={styles.card}>
          <Rates
            rates={(rates && rates[selectedRate]?.rates) || 0}
            onModify={_handleModify}
          />
        </Card>
      </Col>
      <Col className={styles.col} span={12}>
        <Card className={styles.card}>
          <Balance ethBalance={ethBalance} rates={rates} selectedRate={selectedRate} onModify={setSelectedRate} />
        </Card>
      </Col>
    </Row>
  );
};
