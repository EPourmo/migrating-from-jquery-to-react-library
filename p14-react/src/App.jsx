import Header from "./components/Header";
import Title from "./components/Title";
import FormUI from "./components/FormUI";
import TableUI from "./components/TableUI";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="m-4">
        <Header />
        <Title />
        <Routes>
          <Route path="/" element={<FormUI />} />
          <Route path="/employees" element={<TableUI />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
