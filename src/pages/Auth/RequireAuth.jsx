import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const isAuthenticated = useSelector(
    (state) => state.userReducer?.isAuthenticated
  );
  console.log(isAuthenticated);
  // const location = useLocation();

  if (!isAuthenticated) {
    // return <Navigate to="/" state={{ from: location }} replace />;
    return <Navigate to="/" />;
  }
  return children;
}

export default RequireAuth;
