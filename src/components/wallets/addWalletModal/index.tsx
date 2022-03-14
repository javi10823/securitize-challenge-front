import { Form, Input, Modal } from "antd";
import { Props } from "./index.types";

export const AddWalletModal = ({ visible, onSubmit, onClose }: Props) => {
  const [form] = Form.useForm();

  const _handleSubmit = () => {
    if (form.getFieldError("address").length === 0) {
        onSubmit(form.getFieldValue('address'));
        form.resetFields()
        return "";
    }
  };

  const _handleClose = () => {
    form.resetFields()
    onClose()
  }

  return (
    <Modal
      title="Add new Wallet"
      visible={visible}
      onOk={_handleSubmit}
      onCancel={_handleClose}
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
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
