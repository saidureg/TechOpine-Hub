import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IoChevronForwardOutline } from "react-icons/io5";

const SidebarSubmenu = ({ submenu, name, icon }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
  useEffect(() => {
    if (
      submenu.filter((m) => {
        return m.path === location.pathname;
      })[0]
    )
      setIsExpanded(true);
  }, [submenu, location.pathname]);
  return (
    <div className="flex flex-col">
      {/** Route header */}
      <div className="w-full block" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {name}
        <IoChevronForwardOutline
          className={
            "w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  " +
            (isExpanded ? "rotate-90" : "")
          }
        />
      </div>

      {/** Submenu list */}
      <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
          {submenu.map((m, k) => {
            return (
              <li key={k}>
                <Link to={m.path}>
                  {m.icon} {m.name}
                  {location.pathname == m.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

SidebarSubmenu.propTypes = {
  submenu: PropTypes.array,
  name: PropTypes.string,
  icon: PropTypes.element,
};

export default SidebarSubmenu;
