import { Button, Form, InputNumber, Select } from "antd";
import "antd/dist/antd.css";
import { stateData, departmentData, forItemData } from "../formData";
import Components from "../formData";
import Modal from "@epourmo/react-modal-oc-p14-npm-package";
import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

/**
 *React component rendering Form and all related actions (save data, modal opening...)
 */
const FormUI = () => {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  // Employee state via context
  const { employees, addEmployee } = useContext(EmployeeContext);
  // form data (from antd)
  const [form] = Form.useForm();

  /**
   * fonction to retrieve data from form and update employees list (context)
   * @param {Object} e data from form
   */
  const getData = (e) => {
    const strDate = e.startDate._d;
    const birthDate = e.birth._d;

    // create new employee object
    const newEmployee = {
      key: employees.length + 1,
      firstName: e.firstName,
      lastName: e.lastName,
      startDate: `${strDate.getFullYear()}/${
        strDate.getMonth() + 1
      }/${strDate.getDate()}`,
      department: e.department,
      birth: `${birthDate.getFullYear()}/${
        birthDate.getMonth() + 1
      }/${birthDate.getDate()}`,
      street: e.street,
      city: e.city,
      state: e.state,
      zipCode: e.zip,
    };
    // add new employee from employees list
    addEmployee(newEmployee);
    // reset form inputs
    form.resetFields();
  };

  return (
    <>
      <Form
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
        labelCol={{
          span: 5,
        }}
        layout="horizontal"
        size="large"
        onFinish={getData}
        form={form}
      >
        {forItemData.map((block) => Components(block))}
        <Form.Item
          label="State"
          name="state"
          rules={[
            {
              required: true,
              message: `Please input your State!`,
            },
          ]}
        >
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
        <Form.Item
          label="Zip Code"
          name="zip"
          rules={[
            {
              required: true,
              message: `Please input your Zip Code!`,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Department"
          name="department"
          rules={[
            {
              required: true,
              message: `Please input your Department`,
            },
          ]}
        >
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
          style={{
            maxWidth: "200px",
            margin: "60px auto 0",
          }}
          shouldUpdate
        >
          {() => (
            <Button
              htmlType="submit"
              color="black"
              block
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length > 0
              }
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Save
            </Button>
          )}
        </Form.Item>
      </Form>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} message={"Employee Created!"} />
      )}
    </>
  );
};

export default FormUI;
