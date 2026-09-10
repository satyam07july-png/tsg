import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, allowedRole, allowedRoles }) {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");

  if (!token || !userStr) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  let user;
  try {
    user = JSON.parse(userStr);
  } catch {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user || !user.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Build target roles list
  const roles = allowedRoles
    ? Array.isArray(allowedRoles)
      ? allowedRoles
      : [allowedRoles]
    : allowedRole
    ? [allowedRole]
    : [];

  if (roles.length > 0 && !roles.includes(user.role)) {
    // If user doesn't have the required role, redirect to appropriate home
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (user.role === "teacher") {
      return <Navigate to="/teacher-dashboard" replace />;
    } else {
      return <Navigate to="/student" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;