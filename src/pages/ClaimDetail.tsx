import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ClaimDetail = () => {
  const { claimId } = useParams();
  const navigate = useNavigate();
  const [analysisStatus, setAnalysisStatus] = useState<'pending' | 'analyzing' | 'complete'>('pending');
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [chatInput, setChatInput] = useState('');

  // Mock claim data
  const claimData = {
    id: claimId,
    claimant: 'John Smith',
    policyNumber: 'POL-2024-5678',
    incidentDate: '2024-01-15',
    claimType: 'Auto Accident',
    status: analysisStatus === 'complete' ? 'Analyzed' : 'Pending',
    riskScore: analysisStatus === 'complete' ? 92 : null,
    files: [
      { name: 'police_report.pdf', type: 'document', status: 'analyzed' },
      { name: 'vehicle_damage.jpg', type: 'image', status: 'analyzed' },
      { name: 'medical_report.pdf', type: 'document', status: 'analyzed' }
    ]
  };

  const runAnalysis = () => {
    setAnalysisStatus('analyzing');
    setTimeout(() => setAnalysisStatus('complete'), 3000);
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, 
      { type: 'user', message: chatInput },
      { type: 'ai', message: 'Based on the evidence analysis, I found timeline inconsistencies in the medical report dates.' }
    ]);
    setChatInput('');
  };

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/claims')}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-slate-400"></i>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Claim Details</h1>
            <p className="text-slate-400">Claim ID: {claimId}</p>
          </div>
        </div>
        {analysisStatus === 'pending' && (
          <button
            onClick={runAnalysis}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
          >
            <i className="fa-solid fa-play mr-2"></i>
            Run AI Analysis
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Claim Info */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Claim Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400 text-sm">Claimant</p>
                <p className="text-white">{claimData.claimant}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Policy Number</p>
                <p className="text-white font-mono">{claimData.policyNumber}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Incident Date</p>
                <p className="text-white">{claimData.incidentDate}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Claim Type</p>
                <p className="text-white">{claimData.claimType}</p>
              </div>
            </div>
          </div>

          {/* Files & Analysis */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Evidence Files</h2>
            <div className="space-y-3">
              {claimData.files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <i className={`fa-solid ${file.type === 'image' ? 'fa-image' : 'fa-file-pdf'} text-emerald-500`}></i>
                    <span className="text-white">{file.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {analysisStatus === 'analyzing' ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full"></div>
                        <span className="text-yellow-400 text-sm">Analyzing...</span>
                      </div>
                    ) : analysisStatus === 'complete' ? (
                      <span className="text-emerald-400 text-sm">
                        <i className="fa-solid fa-check mr-1"></i>
                        Analyzed
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm">Pending</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analysis Results */}
          {analysisStatus === 'complete' && (
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">AI Analysis Results</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-1">{claimData.riskScore}%</div>
                    <div className="w-20 h-2 bg-slate-700 rounded-full">
                      <div className="w-full h-full bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-slate-400 text-sm mt-1">Fraud Risk</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Key Risk Factors</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-red-400">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        Timeline contradictions detected
                      </li>
                      <li className="flex items-center gap-2 text-red-400">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        Medical report predates incident
                      </li>
                      <li className="flex items-center gap-2 text-yellow-400">
                        <i className="fa-solid fa-exclamation-triangle"></i>
                        Image metadata inconsistencies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Current Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  analysisStatus === 'complete' ? 'text-green-400 bg-green-400 bg-opacity-10' : 'text-yellow-400 bg-yellow-400 bg-opacity-10'
                }`}>
                  {claimData.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Files Uploaded</span>
                <span className="text-white">{claimData.files.length}</span>
              </div>
            </div>
          </div>

          {/* Co-Pilot Chat */}
          {analysisStatus === 'complete' && (
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                <i className="fa-solid fa-comments text-emerald-500 mr-2"></i>
                AI Co-Pilot
              </h3>
              <div className="space-y-4">
                <div className="h-40 overflow-y-auto space-y-2 bg-slate-900 p-3 rounded-lg">
                  {chatMessages.length === 0 ? (
                    <p className="text-slate-400 text-sm">Ask me anything about this claim...</p>
                  ) : (
                    chatMessages.map((msg, index) => (
                      <div key={index} className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-2 rounded-lg text-sm ${
                          msg.type === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-200'
                        }`}>
                          {msg.message}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask about this claim..."
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimDetail;