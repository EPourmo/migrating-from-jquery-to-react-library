import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// create Context
const EmployeeContext = createContext();

/**
 * return a new component which will wrap children components to pass context value
 * @param {Object} props children components
 * @returns
 */
function EmployeeContextProvider(props) {
  // create usState to retrieve employees data
  const [employees, setEmployees] = useState(() => {
    // if local storage, collect value. If not empty array
    const employeesList = localStorage.getItem("employeesList");
    if (employeesList === null) return [];
    try {
      return JSON.parse(employeesList);
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    // storing employees
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  /**
   * funtion to add new employee data
   * @param {Object} newEmployee new employee data
   */
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

EmployeeContextProvider.propTypes = {
  children: PropTypes.node,
};
