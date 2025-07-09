import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const getUserData = (state: RootState) => state.user;

export const selectAuthChecked = createSelector(
  getUserData,
  (state) => state.isAuthChecked
);
export const selectAuthError = createSelector(
  getUserData,
  (state) => state.error
);
export const selectUser = createSelector(getUserData, (state) => state.user);
export const selectIsUserAuth = createSelector(getUserData, (state) =>
  Boolean(state.user)
);
