import { Button, List, Popconfirm, Tooltip, Typography } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";
import { Props } from "./index.types";

export const WalletData = ({ wallet, onDelete, onFavorite }: Props) => {
  if (wallet) {
    const { address, balance, id, isFavorite, isOld } = wallet;

    const data = [
      {
        name: "Wallet address",
        value: address,
      },
      {
        name: "Wallet ETH balance",
        value: `${Number(balance)} ETH`,
      },
      {
        name: "It's an old wallet?",
        value: isOld ? "Yes" : "No",
      },
    ];

    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.name} description={item.value} />
            </List.Item>
          )}
        />
        <Popconfirm
          title="Are you sure to remove that wallet?"
          okText="Confirm"
          cancelText="Cancel"
          onConfirm={onDelete.bind(null, id)}>
          <Button type="primary" danger>
            Remove Wallet
          </Button>
        </Popconfirm>

        <Tooltip
          title={isFavorite ? "Remove from favorites" : "Add to Favorites"}>
          <Button
            shape="circle"
            onClick={() => onFavorite(id, isFavorite)}
            icon={
              isFavorite ? <StarFilled color="#F5C242" /> : <StarOutlined />
            }
            className={styles.setFavorite}
          />
        </Tooltip>
      </div>
    );
  }

  return (
    <div>
      <Typography.Text>Please select a wallet first!</Typography.Text>
    </div>
  );
};
