import { configureStore } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

import { userReducer, userInitialState } from '@entities/User/store';
import { userThunk } from '../model';

import { setIsAuthChecked, clearError } from '@entities/User/store';

import {
  selectAuthChecked,
  selectAuthError,
  selectUser,
  selectIsUserAuth
} from '@entities/User';

import { TUserData } from '@shared/api';

const mockData: TUserData = {
  name: 'Василий',
  city: 'Томск',
  birthDay: '12',
  about: 'Красивый',
  gender: 'Мужской',
  image: 'pic.png'
};

describe('тест работы userSlice', () => {
  describe('тест работы асинхронных экшенов', () => {
    describe('тест экшена register', () => {
      test('тест состояния pending', () => {
        const action = { type: userThunk.register.pending.type };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeTruthy();
        expect(state.user).toBeNull();
        expect(state.error).toBeNull();
      });
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.register.fulfilled.type,
          payload: mockData
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.user).toEqual(mockData);
      });
      test('тест состояния rejected', () => {
        const action = {
          type: userThunk.register.rejected.type,
          payload: 'Какая-то ошибка'
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.error).toBe('Какая-то ошибка');
      });
    });
    describe('тест экшена login', () => {
      test('тест состояния pending', () => {
        const action = { type: userThunk.login.pending.type };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeTruthy();
        expect(state.user).toBeNull();
        expect(state.error).toBeNull();
      });
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.login.fulfilled.type,
          payload: mockData
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.user).toEqual(mockData);
      });
      test('тест состояния rejected', () => {
        const action = {
          type: userThunk.login.rejected.type,
          payload: 'Какая-то ошибка'
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.error).toBe('Какая-то ошибка');
      });
    });
    describe('тест экшена logout', () => {
      test('тест состояния fulfilled', () => {
        const action = { type: userThunk.logout.fulfilled.type };
        const state = userReducer(
          {
            ...userInitialState,
            user: mockData
          },
          action
        );

        expect(state.user).toBeNull();
      });
    });
  });
  describe('тест синхронных экшенов', () => {
    test('тест экшена setIsAuthChecked', () => {
      const action = { type: setIsAuthChecked.type, payload: true };
      const state = userReducer(userInitialState, action);

      expect(state.isAuthChecked).toBeTruthy();
    });
    test('тест экшена clearError', () => {
      const action = { type: clearError.type };
      const state = userReducer(
        {
          ...userInitialState,
          error: 'Какая-то ошибка'
        },
        action
      );

      expect(state.error).toBeNull();
    });
  });
  describe('тест работы селекторов', () => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          isAuthChecked: true,
          user: mockData,
          error: 'Какая-то ошибка'
        }
      }
    });

    test('тест селектора selectAuthChecked', () => {
      const expectedChecked = selectAuthChecked(store.getState() as RootState);
      expect(expectedChecked).toBeTruthy();
    });
    test('тест селектора selectAuthError', () => {
      const expectedError = selectAuthError(store.getState() as RootState);
      expect(expectedError).toBe('Какая-то ошибка');
    });
    test('тест селектора selectUser', () => {
      const expectedUser = selectUser(store.getState() as RootState);
      expect(expectedUser).toEqual(mockData);
    });
    test('тест селектора selectIsUserAuth', () => {
      const expectedUserExist = selectIsUserAuth(store.getState() as RootState);
      expect(expectedUserExist).toBeTruthy;
    });
  });
});
