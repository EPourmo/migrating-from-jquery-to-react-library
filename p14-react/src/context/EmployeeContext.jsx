import { createContext, useState } from "react";
const EmployeeContext = createContext();

function EmployeeContextProvider(props) {
  const [employees, setEmployees] = useState([]);

  function addEmployee(newEmployee) {
    setEmployees((prevEmployee) => [...prevEmployee, newEmployee]);
  }

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}

export { EmployeeContextProvider, EmployeeContext };
