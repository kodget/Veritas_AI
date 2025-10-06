import { useAppDispatch, useAppSelector } from "../redux/store";
import { setIsOpen } from "../components/features/Modal/toggleModalSlice";
import { useNavigate } from 'react-router-dom';

import MultiStepFormModal from "../components/common/Modal/MultiStepFormModal";

const Claims = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const { results } = useAppSelector((state) => state.search);
  
  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";
    if (status === 'Pending') {
      return `${baseClasses} text-yellow-400 bg-yellow-400 bg-opacity-10`;
    }
    return `${baseClasses} text-green-400 bg-green-400 bg-opacity-10`;
  };
  
  const getRiskBar = (score: number) => {
    if (score > 80) return 'bg-red-500';
    if (score > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          All Claims
        </h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search claims..."
              className="pl-12 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white w-80 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            onClick={() => dispatch(setIsOpen(true))}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <i className="fa-solid fa-plus"></i>
            New Claim
          </button>
        </div>
      </div>

      {/* Claims Table */}
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Claimant</th>
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Claim ID</th>
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Policy #</th>
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Date Filed</th>
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Status</th>
              <th className="text-left p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Fraud Risk</th>
            </tr>
          </thead>
          <tbody>
            {results.map((data, index) => (
              <tr 
                key={index} 
                onClick={() => navigate(`/claims/${data.ClaimID}`)}
                className="border-b border-slate-700 hover:bg-slate-700 cursor-pointer transition-colors"
              >
                <td className="p-5 text-white">{data.Claimant}</td>
                <td className="p-5">
                  <span className="font-mono text-sm text-slate-400">
                    {data.ClaimID}
                  </span>
                </td>
                <td className="p-5">
                  <span className="font-mono text-sm text-slate-400">
                    {data.PolicyNumber}
                  </span>
                </td>
                <td className="p-5 text-white">{data.date}</td>
                <td className="p-5">
                  <span className={getStatusBadge(data.status)}>
                    {data.status}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="text-white">{data.riskScore}%</span>
                    <div className="w-24 h-2 bg-slate-600 rounded-full">
                      <div 
                        className={`h-full rounded-full ${getRiskBar(data.riskScore)}`}
                        style={{ width: `${data.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isOpen && <MultiStepFormModal />}
    </div>
  );
};

export default Claims;
