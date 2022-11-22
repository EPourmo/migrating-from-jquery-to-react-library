import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/**
 *React component rendering Header component depending pathname data
 */
const Header = () => {
  const localisation = useLocation().pathname;
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className="font-lobster text-5xl text-primary">
        HRnet
      </Link>
      <Link
        to={localisation === "/" ? "/employees" : "/"}
        className="text-primary px-3 py-1.5 rounded-lg border-2 border-primary font-bold hover:scale-105 uppercase"
      >
        {localisation === "/" ? "View current employee" : "Go to Homepage"}
      </Link>
    </nav>
  );
};

export default Header;
