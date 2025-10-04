import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { logout } from '../features/auth/authSlice';
import { IoLogOut, IoPerson } from 'react-icons/io5';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!token) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 antialiased font-sans">
      <header className="flex justify-between items-center p-4 bg-white shadow-md border-b border-indigo-100 sticky top-0 z-20">
        <div className="text-2xl font-extrabold text-indigo-700 tracking-tight">
          Veritas<span className="text-emerald-500">AI</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm font-medium text-gray-700">
            <IoPerson className="w-5 h-5 mr-2 text-indigo-500" />
            Hello, {user?.firstName || 'Agent'}
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center py-2 px-4 bg-red-600 rounded-lg text-white text-sm font-bold hover:bg-red-700 transition duration-200 shadow-md"
          >
            <IoLogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;