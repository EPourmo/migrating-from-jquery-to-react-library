import { useLocation } from "react-router-dom";

const Title = () => {
  const localisation = useLocation().pathname;
  return (
    <div className="text-center mt-5 text-3xl text-primaryLight mb-20">
      {localisation === "/" ? "Create Employee" : "Current Employees"}
    </div>
  );
};

export default Title;
