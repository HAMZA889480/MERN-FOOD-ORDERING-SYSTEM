import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./components/Pages/HomePage";
import AuthCallBackPage from "./components/Pages/AuthCallBackPage";
import UserProfilePage from "./components/Pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

//This component is used to define the routes in our application

//All the Routes and there corresponding components are defined here
const AppRouters = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout heroRequired={true} child={<HomePage />} />}
      />

      {/* Protected Route. All the protected routes are enclosed insid this Route */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={<Layout child={<UserProfilePage />} />}
        />
      </Route>

      <Route path="/auth-callback" element={<AuthCallBackPage />} />

      {/* for unspicified routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouters;
