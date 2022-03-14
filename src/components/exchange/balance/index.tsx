import { Col, Row, Select, Typography } from 'antd';
import { Props } from './index.types';
import styles from './styles.module.css';

export const Balance = ({ ethBalance, rates, selectedRate, onModify }: Props) => (
  <div>
    <Row>
      <Col>
        <Select
          defaultValue={selectedRate}
          onChange={(value) => onModify(value)}
          className={styles.selector}
        >
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
        <Typography.Title>
          {ethBalance && rates? ethBalance * parseInt(rates[selectedRate]?.rates) : '0'}
        </Typography.Title>
      </Col>
    </Row>
  </div>
);
