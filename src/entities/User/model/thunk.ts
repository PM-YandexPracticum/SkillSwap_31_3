import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUserApi,
  logoutUserApi,
  TRegisterData,
  TUser,
  putFavoriteApi,
  deleteFavoriteApi
} from '@api';

export const userThunk = {
  register: createAsyncThunk<TUser, TRegisterData, { rejectValue: string }>(
    'user/userRegister',
    async (registerData, { rejectWithValue }) => {
      try {
        const response = await registerUserApi(registerData);
        console.log(response);
        if (response.success) {
          localStorage.setItem('email', response.data?.email);
          return response.data;
        }

        const errorResponse = response as { error: string };
        return rejectWithValue(errorResponse.error);
      } catch (err) {
        return rejectWithValue(err as string);
      }
    }
  ),
  logout: createAsyncThunk('user/logout', () =>
    logoutUserApi().then(() => {
      localStorage.removeItem('email');
    })
  ),
  putLike: createAsyncThunk('user/putLike', (id: string) => putFavoriteApi(id)),
  deleteLike: createAsyncThunk('user/deleteLike', (id: string) =>
    deleteFavoriteApi(id)
  )
};
