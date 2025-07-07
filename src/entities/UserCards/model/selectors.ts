import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const getUserCardsData = (state: RootState) => state.userCards;

export const selectUserCards = createSelector(
  getUserCardsData,
  (state) => state.cards
);
export const selectExchangeRequest = createSelector(
  getUserCardsData,
  (state) => state.exchangeRequest
);
export const selectUserCardError = createSelector(
  getUserCardsData,
  (state) => state.error
);
