import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  //   localStorage.removeItem("token");
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};
