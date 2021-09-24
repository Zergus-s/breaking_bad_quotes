import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../API/index';

export const fetchCharacterQuotes = createAsyncThunk(
  'quotes/getQuotes',
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const CharacterQuoteSlice = createSlice({
  name: 'character-info',
  initialState: { quotes: [], status: null },
  reducers: {},
  extraReducers: {
    [fetchCharacterQuotes.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCharacterQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload;
      state.status = 'success';
    },
    [fetchCharacterQuotes.rejected]: (state, action) => {
      state.status = 'failed';
      console.error(action, 'info');
    },
  },
});

export default CharacterQuoteSlice.reducer;
