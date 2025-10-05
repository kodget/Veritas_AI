import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAppSelector } from "./redux/store";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Claims from "./pages/Claims";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ReportPage from "./pages/Report";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Layout from "./components/layouts/Layout"; // Global/shell layout (e.g., modals, notifications)

// FontAwesome Icons Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Add them globally for performance
library.add(faUser, faEnvelope, faPlus, faXmark);

// === Protected Route HOC (High-Order Component) ===
// A master class wrapper to enforce authentication before rendering children
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const token = useAppSelector((state) => state.auth.token);
  // Fail fast: if no token, redirect to login for a smooth UX
  return token ? children : <Navigate to="/login" replace />;
};

const AppRouter: React.FC = () => {
  // Utility function for Protected Routes with DashboardLayout applied
  const protectedRouteElement = (pageComponent: React.ReactElement) => (
    <ProtectedRoute>
      <DashboardLayout>{pageComponent}</DashboardLayout>
    </ProtectedRoute>
  );

  return (
    <Router>
      <Layout>
        {" "}
        {/* Global wrapper for context, modals, etc. */}
        <Routes>
          {/* === PUBLIC (AUTH) ROUTES: Elegantly wrapped in AuthLayout === */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout>
                <Signup />
              </AuthLayout>
            }
          />

          {/* === PROTECTED (DASHBOARD) ROUTES: Secure, consistent, and scalable === */}

          {/* Home/Index Route: Claims dashboard is the user's starting point */}
          <Route path="/" element={protectedRouteElement(<Claims />)} />

          {/* Dashboard Features */}
          <Route path="/reports" element={protectedRouteElement(<Reports />)} />
          <Route
            path="/settings"
            element={protectedRouteElement(<Settings />)}
          />
          <Route
            path="/report"
            element={protectedRouteElement(<ReportPage />)}
          />

          {/* === FALLBACK: Catch-all to redirect unmatched routes to the root/login flow === */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
