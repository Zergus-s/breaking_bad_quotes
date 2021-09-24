import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../API/index';

// const sendToLocalStorage = (item) => {
//   localStorage.setItem('notes', JSON.stringify(item));
// };

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await axios.get('characters');

    return response.data;
  }
);

export const CharacterSlice = createSlice({
  name: 'characters',
  initialState: { characters: [] },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload;
    },
  },
});

// export const {  } = CharacterSlice.actions;

export default CharacterSlice.reducer;
