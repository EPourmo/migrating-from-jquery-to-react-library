import Header from "./components/Header";
import Title from "./components/Title";
import FormUI from "./components/FormUI";
import TableUI from "./components/TableUI";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmployeeContextProvider } from "./context/EmployeeContext";

function App() {
  return (
    <EmployeeContextProvider>
      <Router>
        <div className="m-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header text="View current employee" />
                  <Title title="Create Employee" />
                  <FormUI />
                </>
              }
            />
            <Route
              path="/employees"
              element={
                <>
                  <Header text="Go to Homepage" />
                  <Title title="Current Employees" />
                  <TableUI />
                </>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </EmployeeContextProvider>
  );
}

export default App;
