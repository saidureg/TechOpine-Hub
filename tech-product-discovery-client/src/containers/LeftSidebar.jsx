import { Link, NavLink, useLocation } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import SidebarSubmenu from "./SidebarSubmenu";
import routes from "../Routes/Sidebar";

const LeftSidebar = () => {
  const location = useLocation();
  // const routes = [
  //   {
  //     name: "Dashboard",
  //     path: "/admin/welcome",
  //     icon: <i className="fas fa-tachometer-alt"></i>,
  //   },
  //   {
  //     name: "Products",
  //     path: "/admin/products",
  //     icon: <i className="fas fa-box"></i>,
  //   },
  //   {
  //     name: "Customers",
  //     path: "/admin/customers",
  //     icon: <i className="fas fa-users"></i>,
  //   },
  //   {
  //     name: "Orders",
  //     path: "/admin/orders",
  //     icon: <i className="fas fa-shopping-cart"></i>,
  //   },
  //   {
  //     name: "Transactions",
  //     path: "/admin/transactions",
  //     icon: <i className="fas fa-bullhorn"></i>,
  //   },
  //   {
  //     name: "Analytics",
  //     path: "/admin/analytics",
  //     icon: <i className="fas fa-chart-line"></i>,
  //   },
  //   {
  //     name: "Reports",
  //     path: "/admin/reports",
  //     icon: <i className="fas fa-chart-bar"></i>,
  //   },
  //   {
  //     name: "Settings",
  //     path: "/admin/settings",
  //     icon: <i className="fas fa-cog"></i>,
  //   },
  //   {
  //     name: "Profile",
  //     path: "/admin/profile",
  //     icon: <i className="fas fa-user"></i>,
  //   },
  // ];

  const close = () => {
    document.getElementById("left-sidebar-drawer").click();
  };
  return (
    <div className="drawer-side  z-30  ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <FaXmark className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to={"/app/welcome"}>
            <img
              className="mask mask-squircle w-10"
              src="/logo.png"
              alt=" Logo"
            />
            DashWind
          </Link>{" "}
        </li>
        {routes?.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "font-semibold  bg-base-200 " : "font-normal"
                    }`
                  }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
