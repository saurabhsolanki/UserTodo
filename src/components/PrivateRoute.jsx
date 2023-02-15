import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  if (!token || token === "") {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
