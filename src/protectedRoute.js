import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  let location = useLocation();
  let Navigate = useNavigate();

  if (!user) {
    return (
      <>
        <h1>You need to b logged in first to access thi</h1>
        <Navigate to="/" state={{ from: location }} replace />
      </>
    );
  }
  return children;
};

export default ProtectedRoute;
