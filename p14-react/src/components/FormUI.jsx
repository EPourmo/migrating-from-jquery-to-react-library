import { Button, Form, InputNumber, message, Select } from "antd";
import "antd/dist/antd.css";
import { stateData, departmentData, forItemData } from "../formData";
import Components from "../formData";
// import Modal from "react-modal-oc-p14";
import Modal from "./Modal";
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
        {forItemData.map((block) => Components(block))}
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
        <Form.Item
          wrapperCol={{
            span: 7,
          }}
        >
          <Button
            htmlType="submit"
            color="black"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} message={"Employee Created!"} />
      )}
    </>
  );
};

export default FormUI;
