import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CharacterInfoSlice from '../features/character-info/redux/CharacterInfoSlice';
import CharacterSlice from '../features/characters-list/redux/CharactersSlice';
import CharacterQuoteSlice from '../features/character-quotes/redux/CharacterQuoteSlice';

export const store = configureStore({
  reducer: combineReducers({
    characters: CharacterSlice,
    charInfo: CharacterInfoSlice,
    quotes: CharacterQuoteSlice,
  }),
});
