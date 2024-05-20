import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth0();

  //if the user is authenticated, render the child components
  //otherwise redirect the user to the home page
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
