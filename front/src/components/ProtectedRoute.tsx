import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem("adminToken");

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;


// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute: React.FC = () => {
//   const isAuthenticated = localStorage.getItem("adminToken"); // Check if admin is logged in

//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
// };

// export default ProtectedRoute;
