import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CharacterInfoSlice from '../features/character-info/redux/CharacterInfoSlice';
import CharacterSlice from '../features/characters-list/redux/CharactersSlice';
import CharacterQuoteSlice from '../features/character-quotes/redux/CharacterQuoteSlice';
import FavoriteQuoteSlice from '../features/favorite-quotes/redux/FavoriteQuoteSlice';

export const store = configureStore({
  reducer: combineReducers({
    characters: CharacterSlice,
    charInfo: CharacterInfoSlice,
    quotesList: CharacterQuoteSlice,
    favoriteQuotes: FavoriteQuoteSlice,
  }),
});
