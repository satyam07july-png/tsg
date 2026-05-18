import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const token = localStorage.getItem("token");

  console.log("USER:", user);
  console.log("TOKEN:", token);

  // NOT LOGGED IN
  if (!user || !token) {

    console.log("Redirecting To Login");

    return <Navigate to="/login" />;
  }

  // NOT ADMIN
  if (user.role !== "admin") {

    console.log("Not Admin");

    return <Navigate to="/" />;
  }

  console.log("Admin Access Granted");

  return children;
};

export default AdminRoute;