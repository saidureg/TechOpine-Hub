import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MdSunny } from "react-icons/md";
import { FaRegBell, FaBars } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import swal from "sweetalert";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";
import DropdownLayout from "../components/Ui/DropdownLayout";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import { routesToTitle } from "../utils/routesToTitle";

const Header = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const path = location.pathname;
  const pageTitle = routesToTitle[path] || "Dashboard";
  // const currentTheme = "dark";
  const noOfNotifications = 5;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login", { replace: true });
        return swal(
          "Thanks for visiting the site",
          "Log-out successful",
          "warning"
        );
      })
      .catch(() => {
        return swal("Oops!", "Something went wrong", "error");
      });
  };

  return (
    <>
      <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="flex-1">
          <label
            htmlFor="left-sidebar-drawer"
            className="bg-primary text-white px-2 py-1 rounded-md md:btn md:btn-primary drawer-button lg:hidden"
          >
            {/* <Bars3Icon className="h-5 inline-block w-5" /> */}
            <FaBars className="h-5 inline-block w-4 md:w-5" />
          </label>
          <h1 className="text-lg md:text-2xl font-semibold mx-1">
            {pageTitle}
          </h1>
        </div>

        <div className="flex-none">
          {/* Light and dark theme selection toogle **/}
          <div>
            <ThemeToggle />
          </div>

          {/* Notification icon */}
          {/* <button className="btn btn-ghost ml-4 btn-circle">
            <div className="indicator">
              <BellIcon className="h-6 w-6"/>
              <FaRegBell className="h-6 w-6" />
              {noOfNotifications > 0 ? (
                <span className="indicator-item badge badge-secondary badge-sm">
                  {noOfNotifications}
                </span>
              ) : null}
            </div>
          </button> */}
          <div className="dropdown dropdown-bottom dropdown-end btn btn-ghost ml-0 md:ml-3 btn-circle">
            <div
              tabIndex={0}
              role="button"
              className="py-3 px-0 md:px-2 w-full h-full"
            >
              <div className="indicator">
                <FaRegBell className="h-5 md:h-6 w-5 md:w-6" />
                {noOfNotifications > 0 ? (
                  <span className="indicator-item badge badge-secondary badge-sm">
                    {noOfNotifications}
                  </span>
                ) : null}
              </div>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 md:w-96"
            >
              <DropdownLayout title="Notification">
                <div className="flex items-center gap-4 py-3 md:py-5 px-0 md:px-3">
                  <div className="avatar">
                    <div className="w-8 md:w-12 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2 text-xs md:text-base">
                      Saidur Rahaman Change the password
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </DropdownLayout>
            </div>
          </div>

          {/* Profile icon, opening menu on click */}
          <div className="dropdown dropdown-end ml-0 md:ml-3">
            <label tabIndex={0} className="">
              <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex justify-center items-center"
              >
                <div className="btn btn-ghost btn-circle avatar online">
                  <div className="w-8 rounded-full">
                    <img src={user?.photoURL} alt="profile" />
                  </div>
                </div>

                <div className="flex items-center">
                  <h3 className="text-sm md:text-base">Admin</h3>
                  {isExpanded ? (
                    <IoChevronUp className="h-5 w-4 md:w-5" />
                  ) : (
                    <IoChevronDown className="h-5 w-4 md:w-5" />
                  )}
                </div>
              </div>
            </label>

            {isExpanded && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="justify-between">
                  <Link to={"/admin/myProfile"}>
                    My Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="">
                  <Link to={"/admin/settings"}>Settings</Link>
                </li>
                <div className="divider mt-0 mb-0"></div>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
