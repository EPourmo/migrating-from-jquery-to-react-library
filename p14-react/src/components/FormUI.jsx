import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import "antd/dist/antd.css";
import { stateData, departmentData } from "../formData";
import Modal from "react-modal-oc-p14";
import { useState } from "react";

const FormUI = () => {
  const getData = (e) => {
    console.log(e);
  };

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 7,
        }}
        layout="horizontal"
        size="large"
        onFinish={getData}
      >
        <Form.Item label="First Name" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Date of Birth" name="birth">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Street" name="street">
          <Input />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Select
            showSearch
            placeholder="Search state"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={stateData}
          />
        </Form.Item>
        <Form.Item label="Zip Code" name="zip">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Department" name="Ddpartment">
          <Select
            showSearch
            placeholder="Search department"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={departmentData}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};

export default FormUI;
