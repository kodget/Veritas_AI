import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  firstName: string;
  role: 'Adjuster' | 'Admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    /** Clear user session and reset auth state */
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;