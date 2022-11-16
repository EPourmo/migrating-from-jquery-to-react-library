import { Button, Form, InputNumber, Select } from "antd";
import "antd/dist/antd.css";
import { stateData, departmentData, forItemData } from "../formData";
import Components from "../formData";
// import Modal from "react-modal-oc-p14";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const FormUI = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { employees, addEmployee } = useContext(EmployeeContext);
  const [form] = Form.useForm();

  const getData = (e) => {
    const strDate = e.startDate._d;
    const strDay = strDate.getDate();
    const strMonth = strDate.getMonth();
    const strYear = strDate.getFullYear();
    const birthDate = e.birth._d;
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth();
    const birthYear = birthDate.getFullYear();
    const newEmployee = {
      key: employees.length + 1,
      firstName: e.firstName,
      lastName: e.lastName,
      startDate: `${strYear}/${strMonth + 1}/${strDay}`,
      department: e.department,
      birth: `${birthYear}/${birthMonth + 1}/${birthDay}`,
      street: e.street,
      city: e.city,
      state: e.state,
      zipCode: e.zip,
    };
    addEmployee(newEmployee);

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
          // wrapperCol={{
          //   offset: 5,
          // }}
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
