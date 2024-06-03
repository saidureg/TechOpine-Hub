import PropTypes from "prop-types";

const DashboardStats = ({ title, icon, value, description, colorIndex }) => {
  //   const COLORS = ["primary", "primary"];
  const COLORS = ["secondary", "primary"];

  const getDescStyle = () => {
    console.log(description.includes("↗︎"));
    console.log(description.includes("↙"));
    if (description.includes("↗︎"))
      return "font-bold text-green-700 dark:text-green-300";
    else if (description.includes("↙"))
      return "font-bold text-rose-500 dark:text-red-400";
    else return "";
  };
  return (
    <div className="stats shadow">
      <div className="stat">
        <div
          className={`stat-figure dark:text-slate-300 text-${
            COLORS[colorIndex % 2]
          }`}
        >
          {icon}
        </div>
        <div className="stat-title dark:text-slate-300">{title}</div>
        <div
          className={`stat-value dark:text-slate-300 text-${
            COLORS[colorIndex % 2]
          }`}
        >
          {value}
        </div>
        <div className={"stat-desc" + getDescStyle()}>{description}</div>
      </div>
    </div>
  );
};

DashboardStats.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string,
  description: PropTypes.string,
  colorIndex: PropTypes.number,
};

export default DashboardStats;
