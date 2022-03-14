import { Form, Input, Modal } from "antd";
import { useState } from "react";

export const AddWalletModal = ({ visible, onSubmit, onClose }) => {
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();

  const _handleSubmit = () => {
    if (form.getFieldError("address").length === 0) {
      setAddress((prevState) => {
        onSubmit(prevState);
        return "";
      });
    }
  };

  return (
    <Modal
      title="Add new Wallet"
      visible={visible}
      onOk={_handleSubmit}
      onCancel={onClose}
    >
      <Form form={form} initialValues={{ address: "" }}>
        <Form.Item
          name="address"
          label="Address"
          tooltip="Required"
          rules={[
            {
              required: true,
              message: "Please input the wallet address",
            },
            {
              pattern: /^0x[a-fA-F0-9]{40}$/,
              message: "Incorrect ETH wallet address",
            },
          ]}
        >
          <Input
            placeholder="0x0000000000000000000000000000000000000000"
            onChange={({ target: { value } }) => setAddress(value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
