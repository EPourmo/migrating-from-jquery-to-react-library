import { Link } from "react-router-dom";

/**
 * React componant rendering link to employee list
 */
const Error = () => {
  return (
    <div>
      <Link to="/employees" className="flex justify-center">
        <p className="animate-pulse">Employees list</p>
      </Link>
    </div>
  );
};

export default Error;
