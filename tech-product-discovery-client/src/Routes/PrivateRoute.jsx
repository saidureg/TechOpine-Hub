import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SuspenseContent from "../containers/SuspenseContent";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    // return (
    //   <>
    //     <div className="skeleton h-4 w-full"></div> <br />
    //     <div className="skeleton h-4 w-full"></div> <br />
    //     <div className="skeleton h-4 w-full"></div>
    //   </>
    // );
    return <SuspenseContent />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
