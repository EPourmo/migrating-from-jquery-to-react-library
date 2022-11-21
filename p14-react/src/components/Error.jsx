import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <Link to="/employees" className="flex justify-center">
        <p className="animate-pulse">Employees list</p>
      </Link>
    </div>
  );
};

export default Error;
