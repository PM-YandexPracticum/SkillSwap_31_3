import { createSlice } from '@reduxjs/toolkit';

import { userCardsThunk } from '../model';
import { TUserCardsState } from '../model/types';

const initialState: TUserCardsState = {
  cards: [],
  exchangeRequest: false,
  error: false
};

const userCardsSlice = createSlice({
  name: 'userCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userCardsThunk.getUserCards.fulfilled,
      (state, { payload }) => {
        state.cards = payload.data;
      }
    );

    builder.addCase(userCardsThunk.exchangeRequest.pending, (state) => {
      state.exchangeRequest = true;
      state.error = false;
    });

    builder.addCase(userCardsThunk.exchangeRequest.fulfilled, (state) => {
      state.exchangeRequest = false;
    });
    builder.addCase(userCardsThunk.exchangeRequest.rejected, (state) => {
      state.exchangeRequest = false;
      state.error = true;
    });
  }
});

export const userCardsReducer = userCardsSlice.reducer;
export { initialState as userCardsInitialState };
