import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useModerator from "../hooks/useModerator";
import SuspenseContent from "../containers/SuspenseContent";

const ModeratorRoute = ({ children }) => {
  const [isModerator, isModeratorLoading] = useModerator();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isModeratorLoading) {
    return <SuspenseContent />;
  }
  if (user && isModerator) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
ModeratorRoute.propTypes = {
  children: PropTypes.node,
};
export default ModeratorRoute;
