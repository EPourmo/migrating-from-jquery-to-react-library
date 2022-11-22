import PropTypes from "prop-types";

/**
 * React componant rendering page title
 */
const Title = ({ text }) => {
  return (
    <div className="text-center mt-5 text-3xl text-primaryLight mb-20">
      {text}
    </div>
  );
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
