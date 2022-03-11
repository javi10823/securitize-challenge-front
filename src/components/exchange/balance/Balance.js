import { Col, Row, Select, Typography } from "antd";
import styles from './style.module.css';

export const Balance = ({ ethBalance, rates, selectedRate, onModify }) => {
    console.log({ ethBalance, rates, selectedRate })
  return (
    <div>
      <Row>
        <Col>
          <Select defaultValue={selectedRate} onChange={(value) => onModify(value)} className={styles.selector}>
            {rates?.map((rate, index) => (
              <Select.Option value={index} key={index}>
                {rate.currency}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography.Title>{ethBalance * parseInt(rates[selectedRate].rates)}</Typography.Title>
        </Col>
      </Row>
    </div>
  );
};
