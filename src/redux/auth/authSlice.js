import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      toast.success('Successfully registered!');
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.warn('Wrong password or email!');
    },
    [logIn.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [logIn.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      toast.success('Successfully logged in!');
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error('Wrong password or email!');
    },
    [logOut.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.success('Successfully logged out!');
    },
    [logOut.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error('Something went wrong, please try again!');
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isError = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.isError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
