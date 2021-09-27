import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../API/index';

export const fetchCharactersInfo = createAsyncThunk(
  'characters/getCharactersInfo',
  async (url) => {
    const response = await axios.get(url);

    return response.data;
  }
);

export const CharacterInfoSlice = createSlice({
  name: 'character-info',
  initialState: { character: [], status: null },
  reducers: {},
  extraReducers: {
    [fetchCharactersInfo.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCharactersInfo.fulfilled]: (state, action) => {
      state.character = action.payload[0];
      state.status = 'success';
    },
    [fetchCharactersInfo.rejected]: (state, action) => {
      state.status = 'failed';
      console.error(action, 'info');
    },
  },
});

export default CharacterInfoSlice.reducer;
