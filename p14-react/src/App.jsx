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
        <div className="p-4">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Title text="Create Employee" />
                  <FormUI />
                </>
              }
            />
            <Route
              path="/employees"
              element={
                <>
                  <Title text="Current Employees" />
                  <TableUI />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Title text="Error 404" />
                  <Error />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </EmployeeContextProvider>
  );
}

export default App;
