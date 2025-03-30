import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAuthenticated(!!token);

    if (!token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  if (isAuthenticated === null) {
    return null; // Prevent


// import { useEffect } from "react";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";

// const ProtectedRoute: React.FC = () => {
//   const isAuthenticated = localStorage.getItem("adminToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/admin", { replace: true });
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? <Outlet /> : null;
// };

// export default ProtectedRoute;
