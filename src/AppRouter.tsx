import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Claims from './pages/Claims';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Report from './pages/Report';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Layout from './components/layouts/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// FontAwesome Icons Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faEnvelope, faPlus, faXmark);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Auth Pages */}
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
          
          {/* Dashboard Pages */}
          <Route path="/" element={<ProtectedRoute><DashboardLayout><Claims /></DashboardLayout></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><DashboardLayout><Reports /></DashboardLayout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><DashboardLayout><Settings /></DashboardLayout></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><DashboardLayout><Report /></DashboardLayout></ProtectedRoute>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;