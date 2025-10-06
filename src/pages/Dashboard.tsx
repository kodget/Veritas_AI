import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Veritas AI Dashboard</h1>
        <p className="text-slate-300">Your AI-powered claims investigation platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-emerald-500 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Claims</p>
              <p className="text-3xl font-bold text-white">1,247</p>
            </div>
            <i className="fa-solid fa-file-invoice text-2xl text-blue-500"></i>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-yellow-500 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Pending Review</p>
              <p className="text-3xl font-bold text-white">23</p>
            </div>
            <i className="fa-solid fa-clock text-2xl text-yellow-500"></i>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">High Risk</p>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
            <i className="fa-solid fa-triangle-exclamation text-2xl text-red-500"></i>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-emerald-500 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Processed Today</p>
              <p className="text-3xl font-bold text-white">42</p>
            </div>
            <i className="fa-solid fa-check-circle text-2xl text-emerald-500"></i>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => navigate('/claims')}
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            New Claim Analysis
          </button>
          <button 
            onClick={() => navigate('/claims')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fa-solid fa-list mr-2"></i>
            View All Claims
          </button>
          <button 
            onClick={() => navigate('/reports')}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fa-solid fa-chart-bar mr-2"></i>
            View Reports
          </button>
        </div>
      </div>

      {/* Recent Claims */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
        <h2 className="text-xl font-bold text-white mb-4">Recent Claims</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-3 px-4 text-slate-300">Claim ID</th>
                <th className="text-left py-3 px-4 text-slate-300">Status</th>
                <th className="text-left py-3 px-4 text-slate-300">Risk Score</th>
                <th className="text-left py-3 px-4 text-slate-300">Date</th>
                <th className="text-left py-3 px-4 text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="py-3 px-4 text-white">#CLM-2024-001</td>
                <td className="py-3 px-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">High Risk</span>
                </td>
                <td className="py-3 px-4 text-red-400 font-bold">92%</td>
                <td className="py-3 px-4 text-slate-300">Jan 15, 2024</td>
                <td className="py-3 px-4">
                  <button className="text-emerald-400 hover:text-emerald-300">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="py-3 px-4 text-white">#CLM-2024-002</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Pending</span>
                </td>
                <td className="py-3 px-4 text-yellow-400 font-bold">45%</td>
                <td className="py-3 px-4 text-slate-300">Jan 15, 2024</td>
                <td className="py-3 px-4">
                  <button className="text-emerald-400 hover:text-emerald-300">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="py-3 px-4 text-white">#CLM-2024-003</td>
                <td className="py-3 px-4">
                  <span className="bg-emerald-500 text-white px-2 py-1 rounded text-sm">Approved</span>
                </td>
                <td className="py-3 px-4 text-emerald-400 font-bold">12%</td>
                <td className="py-3 px-4 text-slate-300">Jan 14, 2024</td>
                <td className="py-3 px-4">
                  <button className="text-emerald-400 hover:text-emerald-300">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;