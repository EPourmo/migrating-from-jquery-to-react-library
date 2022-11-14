import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error__404">Error 404</h1>

      <Link to="/employees" className="error__link">
        <p>view employees list</p>
      </Link>
    </div>
  );
};

export default Error;
