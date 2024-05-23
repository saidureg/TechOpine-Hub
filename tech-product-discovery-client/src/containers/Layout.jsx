import { Helmet } from "react-helmet-async";
import LeftSidebar from "./LeftSidebar";
// import PageContent from "./PageContent";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - TechOpine</title>
      </Helmet>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <LeftSidebar />
        {/* <PageContent /> */}
        <div className="drawer-content flex flex-col ">
          <Header />
          <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
            {/* <h3>Page Content</h3>
            <div className="h-16"></div> */}
            <Outlet />
          </main>
        </div>
        {/* <Outlet /> */}
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      {/* <RightSidebar /> */}

      {/** Notification layout container */}
      {/* <NotificationContainer /> */}

      {/* Modal layout container */}
      {/* <ModalLayout /> */}
    </>
  );
};

export default Layout;
