import { Col, Row, Select, Typography } from 'antd';
import { currencyMapper } from '../../../utils/currency';
import { Props } from './index.types';
import styles from './styles.module.css';

export const Balance = ({
  ethBalance,
  rates,
  selectedRate,
  onModify,
}: Props) => (
  <div>
    <Row>
      <Col>
        <Typography.Title>
          Balance in{' '}
          {rates && rates[selectedRate] ? rates[selectedRate].currency : '...'}
        </Typography.Title>
      </Col>
    </Row>
    <Row>
      <Col>
        <Select
          defaultValue={selectedRate}
          onChange={(value) => onModify(value)}
          className={styles.selector}>
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
          {currencyMapper(
            rates && rates[selectedRate] && rates[selectedRate]?.currency
          )}
          {(ethBalance && rates
            ? ethBalance * parseInt(rates[selectedRate]?.rates)
            : '0'
          ).toLocaleString()}
        </Typography.Title>
      </Col>
    </Row>
  </div>
);
