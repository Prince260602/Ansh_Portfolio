import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
