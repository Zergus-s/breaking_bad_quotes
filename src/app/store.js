import { configureStore } from '@reduxjs/toolkit';
import CharacterSlice from '../features/characters-list/redux/CharactersSlice';

export const store = configureStore({
  reducer: { characters: CharacterSlice },
});
