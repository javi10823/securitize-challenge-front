import { Input, Row, Col, Button, Tooltip, Typography } from "antd";
import { CheckOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Props } from "./index.types";
import styles from "./styles.module.css";

export const Rates = ({ rates, onModify }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(rates);

  const _handleModify = () => {
    onModify(value);
    setIsEditing(false);
  };

  useEffect(() => {
    setValue(rates);
  }, [rates]);

  return (
    <div>
      <Row align="middle">
        <Col flex="auto">
          <Typography.Title>Value of ETH</Typography.Title>
        </Col>
        {isEditing && (
          <>
            <Col>
              <Tooltip title="Confirm changes">
                <Button
                  shape="circle"
                  icon={<CheckOutlined />}
                  onClick={_handleModify}
                  className={styles.action}
                />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Cancel changes">
                <Button
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={() => setIsEditing(false)}
                  className={styles.action}
                />
              </Tooltip>
            </Col>
          </>
        )}
        {!isEditing && (
          <Col>
            <Tooltip title="Modify rates">
              <Button
                shape="circle"
                icon={<FormOutlined />}
                onClick={() => setIsEditing(true)}
                className={styles.action}
              />
            </Tooltip>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          {isEditing && (
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
          )}
          {!isEditing && <Typography.Title>{rates}</Typography.Title>}
        </Col>
      </Row>
    </div>
  );
};
