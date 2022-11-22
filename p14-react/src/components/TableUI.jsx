import { Table, Input } from "antd";
import { useState, useContext } from "react";
import { testDataForm } from "../testDataForm";
import { EmployeeContext } from "../context/EmployeeContext";

const TableUI = () => {
  // search state for glabal search on table
  const [search, setSearch] = useState("");
  // list of employees from context
  const { employees } = useContext(EmployeeContext);

  /**
   * Function that determines if the row is displayed when filtered
   * @param {String} value search input value
   * @param {Object} record list of employees
   * @returns {boolean} true or false if matches
   */
  const globalFilter = (value, record) => {
    return (
      record.firstName.toLowerCase().includes(value.toLowerCase()) ||
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
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      filteredValue: [search],
      onFilter: (value, record) => globalFilter(value, record),
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
      sorter: (a, b) => a.birth.localeCompare(b.birth),
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
          maxWidth: 350,
          marginBottom: 20,
          display: "flex",
          marginLeft: "auto",
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
        dataSource={employees}
        scroll={{
          x: 900,
        }}
      />
    </>
  );
};

export default TableUI;
