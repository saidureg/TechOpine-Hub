import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineHome } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
import {
  IoSettingsOutline,
  IoNotificationsSharp,
  IoKey,
} from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import swal from "sweetalert";
import Logo from "../Logo";
import useAdmin from "../../../hooks/useAdmin";
import useModerator from "../../../hooks/useModerator";
import DropdownLayout from "../../Ui/DropdownLayout";
import Modal from "../Modal/Modal";
import UpdatedPassword from "../../UpdatedProfile/UpdatedPassword";
import { useState } from "react";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import BtnBrand from "../Button/BtnBrand";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const navLinks = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <Navlinks path="/" route="Home" />
      <Navlinks path="/product" route="Product" />
      <Navlinks path="/contact" route="Contact" />
      <Navlinks path="/admin/dashboard" route="Admin Dashboard" />
    </div>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
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
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost -ml-5 lg:ml-0" to="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-between items-center gap-4 md:gap-7">
          {/* Light and dark theme selection toogle **/}
          <ThemeToggle />

          {/* Notification icon */}
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">9+</span>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="py-2 md:py-3 px-2 w-full h-full"
              >
                <IoNotificationsSharp className="w-full h-[25px] md:h-[30px]" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 md:w-96"
              >
                <DropdownLayout title="Notification">
                  <div className="flex items-center gap-4 py-3 md:py-5 px-1 md:px-3">
                    <div className="avatar">
                      <div className="w-8 md:w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2 text-xs md:text-base">
                        Saidur Rahaman Change the password
                      </p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                </DropdownLayout>
              </div>
            </div>
          </div>

          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-end md:mr-5">
                  <div className="flex items-center gap-1">
                    <label tabIndex={0} className="avatar online rounded-full">
                      <div className="w-[50px] ">
                        <img
                          className="w-full rounded-full bg-base-100 cursor-pointer"
                          src={user?.photoURL}
                        />
                      </div>
                    </label>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-1 divide-y-2 space-y-4 md:p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black dark:text-gray-400 rounded-box w-48 md:w-52 lg:w-56"
                  >
                    {/* <li>
                      <a className="gap-3 text-sm md:text-base lg:text-xl">
                        <CgProfile /> {user?.displayName}
                      </a>
                    </li> */}

                    <li>
                      {/* Menu Items */}
                      <Link
                        className="gap-3 text-sm md:text-base lg:text-xl"
                        to={
                          isAdmin
                            ? "/dashboard/adminProfile"
                            : isModerator
                            ? "/dashboard/moderatorProfile"
                            : "/dashboard/userProfile"
                        }
                      >
                        <AiOutlineHome /> Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="gap-3 text-sm md:text-base lg:text-xl"
                        to={"/dashboard/settings"}
                      >
                        <IoSettingsOutline /> Settings
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => setIsUpdatePassword(!isUpdatePassword)}
                        className="gap-3 text-sm md:text-base lg:text-lg"
                      >
                        <IoKey className="text-xl" /> Change Password
                      </a>
                      <Modal
                        isOpen={isUpdatePassword}
                        setIsOpen={setIsUpdatePassword}
                        title="Change Password"
                        titleStyle="text-xl font-medium leading-6 text-gray-900 text-center mb-4"
                      >
                        <UpdatedPassword
                          setIsUpdatePassword={setIsUpdatePassword}
                          isUpdatePassword={isUpdatePassword}
                        />
                      </Modal>
                    </li>
                    <div className="px-3 pt-2 text-base md:text-lg lg:text-xl">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-primary w-full"
                      >
                        <TbLogout className="text-xl" /> Log Out
                      </button>
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                <BtnBrand text="Login" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
