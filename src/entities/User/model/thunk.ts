import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUserApi,
  loginUserApi,
  logoutUserApi,
  TRegisterData,
  TLoginData,
  TUserData
} from '@shared/api';

export const userThunk = {
  register: createAsyncThunk<TUserData, TRegisterData, { rejectValue: string }>(
    'user/userRegister',
    async (registerData, { rejectWithValue }) => {
      try {
        const response = await registerUserApi(registerData);

        if ('user' in response?.data) return response.data.user;
        if ('error' in response?.data) rejectWithValue(response.data.error);

        return rejectWithValue('Какая-то ошибка');
      } catch (err) {
        return rejectWithValue(err as string);
      }
    }
  ),
  login: createAsyncThunk<TUserData, TLoginData, { rejectValue: string }>(
    'user/userLogin',
    async (loginData, { rejectWithValue }) => {
      try {
        const response = await loginUserApi(loginData);

        if ('user' in response?.data) return response.data.user;
        if ('error' in response?.data) rejectWithValue(response.data.error);

        return rejectWithValue('Какая-то ошибка');
      } catch (err) {
        return rejectWithValue(err as string);
      }
    }
  ),
  logout: createAsyncThunk('user/logout', () => logoutUserApi())
};
