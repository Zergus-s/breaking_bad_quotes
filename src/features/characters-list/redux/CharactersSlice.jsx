import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../API/index';

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await axios.get('characters');

    return response.data;
  }
);

export const CharacterSlice = createSlice({
  name: 'characters',
  initialState: { characters: [], status: null },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload;
      state.status = 'success';
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = 'failed';
      console.error(action.error.message, 'characters');
    },
  },
});

export default CharacterSlice.reducer;
