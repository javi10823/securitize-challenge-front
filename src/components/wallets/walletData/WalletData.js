import { Button, List, Popconfirm } from "antd";

export const WalletData = ({ wallet, onDelete }) => {
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
    </div>
  );
};
