import { Table, Input } from "antd";
import { useState } from "react";
import { testDataForm } from "../testDataForm";

const TableUI = () => {
  const [search, setSearch] = useState("");

  const columns = [
    {
      title: "First Name",
      dataIndex: "firtName",
      key: "firtName",
      sorter: (a, b) => a.firtName.localeCompare(b.firtName),
      filteredValue: [search],
      onFilter: (value, record) => {
        return (
          record.firtName.toLowerCase().includes(value.toLowerCase()) ||
          record.lastName.toLowerCase().includes(value.toLowerCase()) ||
          String(record.startDate)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          record.department.toLowerCase().includes(value.toLowerCase()) ||
          String(record.birth)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          String(record.street)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          record.city.toLowerCase().includes(value.toLowerCase()) ||
          record.state.toLowerCase().includes(value.toLowerCase()) ||
          record.department.toLowerCase().includes(value.toLowerCase()) ||
          String(record.zipCode)
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase())
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Date of Birth",
      dataIndex: "birth",
      key: "birth",
      sorter: (a, b) => a.birth - b.birth,
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
      sorter: (a, b) => a.street.localeCompare(b.street),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      sorter: (a, b) => a.zipCode - b.zipCode,
    },
  ];

  return (
    <>
      <Input
        placeholder="Search information"
        style={{
          width: 300,
          marginBottom: 20,
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table
        pagination={{
          pageSizeOptions: [10, 25, 50, 100],
          showSizeChanger: true,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
        }}
        columns={columns}
        dataSource={testDataForm}
      />
    </>
  );
};

export default TableUI;
