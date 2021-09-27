import { createSlice } from '@reduxjs/toolkit';

export const getFavQuotes = () => {
  return JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
};

export const FavoriteQuoteSlice = createSlice({
  name: 'favorites',
  initialState: { favQuotes: getFavQuotes() },
  reducers: {
    addQuote: (state, action) => {
      state.favQuotes = [...state.favQuotes, action.payload];
      localStorage.setItem('favoriteQuotes', JSON.stringify(state.favQuotes));
    },

    removeQuote: (state, action) => {
      (state.favQuotes = state.favQuotes.filter(
        (quote) => quote.quote_id !== action.payload.quote_id
      )),
        localStorage.setItem('favoriteQuotes', JSON.stringify(state.favQuotes));
    },
  },
});

export const { addQuote, removeQuote, getFavorite } =
  FavoriteQuoteSlice.actions;

export default FavoriteQuoteSlice.reducer;
