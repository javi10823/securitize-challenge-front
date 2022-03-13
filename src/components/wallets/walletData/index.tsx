import { Button, List, Tooltip, Popconfirm } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

import styles from './styles.module.css';

export const WalletData = ({ wallet, onDelete, onFavorite }) => {
  const data = [
    {
      name: "Wallet Address",
      value: wallet?.address,
    },
    {
      name: "Wallet ETH balance",
      value: wallet?.balance,
    },
    {
      name: "Is a old Wallet?",
      value: wallet?.isOld ? "true" : "false",
    },
  ];

  if (!wallet) return <></>;
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
        onConfirm={() => onDelete(wallet.id)}>
        <Button type="primary" danger>
          Remove Wallet
        </Button>
      </Popconfirm>

      <Tooltip
        title={
          wallet?.isFavorite ? "Remove from favorites" : "Add to Favorites"
        }>
        <Button
          shape="circle"
          onClick={() => onFavorite(wallet?.id, !wallet?.isFavorite)}
          icon={
            wallet?.isFavorite ? <StarFilled color="#F5C242" /> : <StarOutlined />
          }
          className={styles.setFavorite}
        />
      </Tooltip>
    </div>
  );
};
