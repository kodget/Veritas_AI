const API_BASE_URL = 'https://veritas-ai-backend-db28.onrender.com/api/v1';

export const apiService = {
  // Authentication endpoints
  signup: async (userData: { email: string; password: string; full_name: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  login: async (credentials: { email: string; password: string }) => {
    const formData = new FormData();
    formData.append('username', credentials.email);
    formData.append('password', credentials.password);
    formData.append('grant_type', 'password');
    
    const response = await fetch(`${API_BASE_URL}/auth/token`, {
      method: 'POST',
      body: formData
    });
    return response.json();
  },

  // Claims endpoints
  getClaims: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/claims`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  createClaim: async (claimData: any, token: string) => {
    const response = await fetch(`${API_BASE_URL}/claims`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(claimData)
    });
    return response.json();
  },

  // AI Co-pilot endpoint
  investigate: async (claimId: string, query: string, token: string) => {
    const response = await fetch(`${API_BASE_URL}/claims/${claimId}/investigate`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({ query })
    });
    return response.json();
  }
};