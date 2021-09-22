import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const axios = require('axios');

// const sendToLocalStorage = (item) => {
//   localStorage.setItem('notes', JSON.stringify(item));
// };

export const fetchCaracters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const data = await axios
      .get('https://www.breakingbadapi.com/api/characters')
      .then((result) => result);
    return data.data;
  }
);

export const CharacterSlice = createSlice({
  name: 'characters',
  initialState: { characters: [] },
  reducers: {},
  extraReducers: {
    [fetchCaracters.fulfilled]: (state, action) => {
      state.characters = action.payload;
    },
  },
});

// export const {  } = CharacterSlice.actions;

export default CharacterSlice.reducer;
