import PropTypes from "prop-types";

const DropdownLayout = ({ title, children }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b p-2">
        <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
        <button className="uppercase text-red-600 text-sm md:text-lg">
          Clear all
        </button>
      </div>
      <div>{children}</div>
      <div>
        <button className="w-full bg-red-600 hover:bg-red-400/95 text-white rounded-md p-2">
          View all {title}
        </button>
      </div>
    </div>
  );
};

DropdownLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default DropdownLayout;
