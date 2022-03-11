import { Form, Input, Modal } from "antd";
import { useState } from "react";

export const AddWalletModal = ({ visible, onSubmit, onClose }) => {
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();

  const _handleSubmit = () => {
    onSubmit(address);
    setAddress('')
  };

  return (
    <Modal title="Add new Wallet" visible={visible} onOk={_handleSubmit} onCancel={onClose}>
      <Form form={form} initialValues={{address: ''}}>
        <Form.Item label="Address" required tooltip="Required">
          <Input placeholder="0x0000" onChange={e => setAddress(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
