import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAppSelector } from "./redux/store";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReportPage from "./pages/Report";
import DashboardLayout from "./layouts/DashboardLayout";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Claims from "./pages/Claims";
import Layout from "./components/layouts/Layout";

// Add them globally
library.add(faUser, faEnvelope, faPlus, faXmark);

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const token = useAppSelector((state) => state.auth.token);
  return token ? children : <Navigate to="/login" replace />;
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ReportPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/" element={<Claims />} />
          <Route path="/about" element={<Reports />} />
          <Route path="/contact" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
