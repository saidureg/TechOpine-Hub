import { Helmet } from "react-helmet-async";
import LeftSidebar from "./LeftSidebar";
import PageContent from "./PageContent";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - TechOpine</title>
      </Helmet>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer  lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <LeftSidebar />
        <PageContent />
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
