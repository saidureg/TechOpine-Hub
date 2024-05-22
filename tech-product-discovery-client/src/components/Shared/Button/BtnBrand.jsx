import PropTypes from "prop-types";
const BtnBrand = ({ text }) => {
  return (
    <button className="btn border-none text-lg bg-[#E76F51] hover:bg-[#F4A261] text-[#F1EAEA]">
      {text}
    </button>
  );
};

BtnBrand.propTypes = {
  text: PropTypes.string,
};

export default BtnBrand;
