import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userThunk } from '../model/thunk';
import { TAuthState } from '../model/types';

const initialState: TAuthState = {
  isAuthChecked: false,
  user: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.register.pending, (state) => {
      state.isAuthChecked = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(userThunk.register.fulfilled, (state, { payload }) => {
      state.isAuthChecked = false;
      state.user = payload;
    });
    builder.addCase(userThunk.register.rejected, (state, { payload }) => {
      state.isAuthChecked = false;
      state.error = payload as string;
    });

    builder.addCase(userThunk.login.pending, (state) => {
      state.isAuthChecked = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(userThunk.login.fulfilled, (state, { payload }) => {
      state.isAuthChecked = false;
      state.user = payload;
    });
    builder.addCase(userThunk.login.rejected, (state, { payload }) => {
      state.isAuthChecked = false;
      state.error = payload as string;
    });

    builder.addCase(userThunk.logout.fulfilled, (state) => {
      state.user = null;
    });
  }
});

export const userReducer = userSlice.reducer;
export const { setIsAuthChecked, clearError } = userSlice.actions;
export { initialState as userInitialState };
